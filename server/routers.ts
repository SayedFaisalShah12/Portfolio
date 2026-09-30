import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, adminProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Blog routes
  blog: router({
    list: publicProcedure.query(() => db.getBlogPosts(true)),
    all: adminProcedure.query(() => db.getBlogPosts()),
    getById: publicProcedure.input(z.object({ id: z.number() })).query(({ input }) => db.getBlogPostById(input.id)),
    create: adminProcedure.input(z.object({
      title: z.string(),
      slug: z.string(),
      excerpt: z.string().optional(),
      content: z.string(),
      category: z.string(),
      readTime: z.number().optional(),
      published: z.number().optional(),
    })).mutation(({ input }) => db.createBlogPost(input)),
    update: adminProcedure.input(z.object({
      id: z.number(),
      title: z.string().optional(),
      slug: z.string().optional(),
      excerpt: z.string().optional(),
      content: z.string().optional(),
      category: z.string().optional(),
      readTime: z.number().optional(),
      published: z.number().optional(),
    })).mutation(({ input }) => db.updateBlogPost(input.id, input)),
    delete: adminProcedure.input(z.object({ id: z.number() })).mutation(({ input }) => db.deleteBlogPost(input.id)),
  }),

  // Project routes
  projects: router({
    list: publicProcedure.query(() => db.getProjects(true)),
    all: adminProcedure.query(() => db.getProjects()),
    getById: publicProcedure.input(z.object({ id: z.number() })).query(({ input }) => db.getProjectById(input.id)),
    create: adminProcedure.input(z.object({
      title: z.string(),
      description: z.string(),
      company: z.string().optional(),
      technologies: z.string().optional(),
      features: z.string().optional(),
      projectLink: z.string().optional(),
      githubLink: z.string().optional(),
      imageUrl: z.string().optional(),
      published: z.number().optional(),
    })).mutation(({ input }) => db.createProject(input)),
    update: adminProcedure.input(z.object({
      id: z.number(),
      title: z.string().optional(),
      description: z.string().optional(),
      company: z.string().optional(),
      technologies: z.string().optional(),
      features: z.string().optional(),
      projectLink: z.string().optional(),
      githubLink: z.string().optional(),
      imageUrl: z.string().optional(),
      published: z.number().optional(),
    })).mutation(({ input }) => db.updateProject(input.id, input)),
    delete: adminProcedure.input(z.object({ id: z.number() })).mutation(({ input }) => db.deleteProject(input.id)),
  }),

  // Skills routes
  skills: router({
    list: publicProcedure.query(() => db.getSkills()),
    create: adminProcedure.input(z.object({
      category: z.string(),
      skillName: z.string(),
      proficiency: z.number().optional(),
      order: z.number().optional(),
    })).mutation(({ input }) => db.createSkill(input)),
    update: adminProcedure.input(z.object({
      id: z.number(),
      category: z.string().optional(),
      skillName: z.string().optional(),
      proficiency: z.number().optional(),
      order: z.number().optional(),
    })).mutation(({ input }) => db.updateSkill(input.id, input)),
    delete: adminProcedure.input(z.object({ id: z.number() })).mutation(({ input }) => db.deleteSkill(input.id)),
  }),

  // Contact messages routes
  messages: router({
    list: adminProcedure.query(() => db.getContactMessages()),
    create: publicProcedure.input(z.object({
      name: z.string(),
      email: z.string().email(),
      subject: z.string(),
      message: z.string(),
    })).mutation(({ input }) => db.createContactMessage(input)),
    markAsRead: adminProcedure.input(z.object({ id: z.number() })).mutation(({ input }) => db.markMessageAsRead(input.id)),
    delete: adminProcedure.input(z.object({ id: z.number() })).mutation(({ input }) => db.deleteContactMessage(input.id)),
  }),
});

export type AppRouter = typeof appRouter;
