import { PrismaService } from 'src/prisma/prisma.service';
export declare class LessonsService {
    private prisma;
    constructor(prisma: PrismaService);
    getLessonById(id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        thumbnail: string | null;
        introduction: import("@prisma/client/runtime/library").JsonValue | null;
        activities: import("@prisma/client/runtime/library").JsonValue | null;
        created_at: Date;
        updated_at: Date;
    }>;
    getLessons(): Promise<{
        id: string;
        title: string;
        description: string | null;
        thumbnail: string | null;
        introduction: import("@prisma/client/runtime/library").JsonValue | null;
        activities: import("@prisma/client/runtime/library").JsonValue | null;
        created_at: Date;
        updated_at: Date;
    }[]>;
}
