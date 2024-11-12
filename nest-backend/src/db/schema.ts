import { pgTable, uuid, timestamp, text, jsonb } from 'drizzle-orm/pg-core';

/**
 * Schema for the database
 * Refer to ER diagram for more information: https://www.figma.com/board/ZCRBACWiasmKD1uKHcO1ub/Taino-Language-App-Dev-Team?node-id=1-190&t=UIZmxdQbz9Ydj3z2-1
 */

export const testTable = pgTable('test', {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull()
});


// TODO: add lesson_table
// export const lessonTable = pgTable('lessons', {
//     id: uuid().primaryKey().defaultRandom(),
//     title: text().notNull(),
//     description: text().notNull(),
//     createdAt: timestamp().notNull().defaultNow(),
//     updatedAt: timestamp().notNull().defaultNow(),
//     activities: jsonb().notNull()
// });

// TODO: add user_profiles table

// TODO: add lessons_learned table

// TODO: add user_lesson_progress table

// TODO: add user_lesson_progress_details table

// TODO: add user_lesson_progress_details_logs table