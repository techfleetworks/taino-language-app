import React, { createContext, ReactNode, useState, useEffect, useContext } from "react";
import { Activity, Lesson } from "@/types/lessons";
import { mockData } from "@/mock-data-v2";

type LessonModuleContextType = {
    id: string;
    lesson: Lesson; // Replace with your specific lesson type
    activities: Activity[];
    currentSection: 'introduction' | 'activities' | 'complete' | ''; 
    currentActivityIndex: number;
    totalActivities: number;
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
  }) => {



    const [currentSection, setCurrentSection] = useState<'introduction' | 'activities' | 'complete' | ''>('');
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
    const [ activities, setActivities ] = useState<Activity[]>([]);


    const id = '482F80CA-D720-41C8-945D-93A6CD90F487' //onboarding lesson id
    // Fetch lesson 
    const lesson: any = mockData.lessons.find(l => l.id === id) 
    // || { 
    //     id: '', 
    //     title: '', 
    //     description: '', 
    //     thumbnail: '', 
    //     updated_at: '', 
    //     created_at: '', 
    //     introduction: {
    //         category: '', // Add appropriate default values
    //         type: '',
    //         phrase: {
    //             id: '',
    //             taino: '',
    //             english: ''
    //         },
    //         vocab_overview: [
              
    //         ] // Ensure this matches the expected type
    //     }, 
    //     activities: []
    // }; // Provide a default value

    // Alternatively, you can throw an error if the lesson is not found
    if (!lesson) {
        throw new Error(`Lesson with id ${id} not found`);
    }

    // // Combine introduction and main activities
    // const activities : Activity[] = [
    //   ...(lesson?.introduction || []).map((activity: any) => ({...activity, id: activity.phrase.id})),
    //   ...(lesson?.activities || []).map((activity: any) => ({...activity, id: activity.id}))
    // ];

    //go to next section of the lesson
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
    };

    const startLesson = () => {
      if(currentSection === '') setCurrentSection('introduction')
      console.log("starting lesson. Current section:  " + currentSection)
    }

    const goBack = () => {

      //first check if the user is at the first activity of introduction or activity section
      if (currentActivityIndex === 0) {
        if(currentSection === 'introduction') {
          setCurrentSection('')
          setCurrentActivityIndex(activities.length - 1 || -1)
        } else if(currentSection === 'activities' && currentActivityIndex === 0) {
          setCurrentSection('introduction')
          setCurrentActivityIndex(activities.length - 1 || -1)
        } 
      } else {
        goToPreviousActivity();
      }
    }

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
  const context = useContext(LessonContext)

  if(!context) throw new Error('useLessonNavigation requires being used within the LessonProvider')
    
  return context
}