import React, { createContext, ReactNode, useState, useEffect, useContext } from "react";
import { Activity, Lesson, VocabOverview } from "@/types/lessons";
import axios from "axios";

type LessonModuleContextType = {
  id: string;
  lesson: Lesson | null; // Replace with your specific lesson type
  activities: Activity[];
  currentSection: 'introduction' | 'activities' | 'complete' | ''; 
  currentActivityIndex: number;
  totalActivities: number;
  handleLessonId: (id: string) => void;
  fetchLessonById: (id: string) => Promise<Lesson | null>;
  getVocabFromLessonOverview: () => any;
  advanceLesson: () => void; //go to next activity
  goToPreviousActivity: () => void;
  resetLesson: () => void;
  startLesson: () => void; 
  goBack: () => void; //used for header when in a lesson
};

const LessonContext = createContext<LessonModuleContextType | undefined>(undefined);

type LessonModuleProviderProps = {
  children: ReactNode;
};

export const LessonModuleProvider: React.FC<LessonModuleProviderProps> = ({ 
  children
} : { children: React.ReactNode }) => {


  const [ id, setId ] = useState<string>('');
  const [ currentSection, setCurrentSection ] = useState<'introduction' | 'activities' | 'complete' | ''>('');
  const [ currentActivityIndex, setCurrentActivityIndex ] = useState(0);
  const [ activities, setActivities ] = useState<Activity[]>([]);
  const [ lesson, setLesson ] = useState<Lesson | null>(null);


  useEffect(() => {
    if(id !== '') {
      const fetchLesson = async () => {
        const fetchedLesson: Lesson | null = await fetchLessonById(id);
  
        if (!fetchedLesson) {
          throw new Error(`Lesson with id ${id} not found`);
        }
  
        setLesson(fetchedLesson);
      };
  
      fetchLesson();
    }
  }, [id]);


  const handleLessonId = (id: string) => {
    setId(id);
  }

  const clearLessonId = () => {
    setId('');
  }

  const fetchLessonById = async (id: string) => {
    const backendUrl = process.env.EXPO_PUBLIC_BACKEND_URL
    //TODO replace hardcoded url with env variable
    const response = await axios.get(`${backendUrl}/lessons/${id}`);
    const data = await response.data;
    return data;
  }

  const getVocabFromLessonOverview = () : VocabOverview[] => {
    const vocabActivity = lesson?.introduction?.vocab_overview;
    return vocabActivity || [];
  }

  const advanceLesson = () => {
    if (currentSection === 'introduction') {
      setCurrentSection('activities');
      setCurrentActivityIndex(0);
    } else if (currentSection === 'activities') {
      if (currentActivityIndex < activities!.length - 1) {
        setCurrentActivityIndex(prev => prev + 1);
      } else {
        setCurrentSection('complete');
      }
    }
  };

  const goToPreviousActivity = () => {
    if (currentActivityIndex > 0) {
      setCurrentActivityIndex(prev => prev - 1);
    } else if (currentSection === 'activities') {
      setCurrentSection('introduction');
    }
  };

  const resetLesson = () => {
    setCurrentSection('');
    setCurrentActivityIndex(0);
    clearLessonId();
  };

  const startLesson = () => {
    if (currentSection === '') setCurrentSection('introduction');
  };

  const goBack = () => {
    if (currentActivityIndex === 0) {
      if (currentSection === 'introduction') {
        setCurrentSection('');
        setCurrentActivityIndex(activities.length - 1 || -1);
      } else if (currentSection === 'activities' && currentActivityIndex === 0) {
        setCurrentSection('introduction');
        setCurrentActivityIndex(activities.length - 1 || -1);
      }
    } else {
      goToPreviousActivity();
    }
  };

  useEffect(() => {
    if (lesson) {
      if (currentSection === 'introduction') {
        setActivities(lesson.introduction as unknown as Activity[]);
        setCurrentActivityIndex(0);
      } else {
        setActivities(lesson.activities as unknown as Activity[]);
        setCurrentActivityIndex(0);
      }
    }
  }, [lesson, currentSection]);



  return (
    <LessonContext.Provider value={{
      id,
      lesson,
      activities,
      currentSection,
      currentActivityIndex,
      totalActivities: activities!.length,
      handleLessonId,
      fetchLessonById,
      getVocabFromLessonOverview,
      advanceLesson,
      goToPreviousActivity,
      resetLesson,
      startLesson,
      goBack
    }}>
      {children}
    </LessonContext.Provider>
  );
};

export const useLessonModule = () => {
  const context = useContext(LessonContext);

  if (!context) throw new Error('useLessonNavigation requires being used within the LessonProvider');

  return context;
};
