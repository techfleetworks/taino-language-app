-- CreateTable
CREATE TABLE "lessons" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" VARCHAR NOT NULL,
    "description" VARCHAR,
    "thumbnail" VARCHAR,
    "introduction" JSONB,
    "activities" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lessons_pk" PRIMARY KEY ("id")
);
