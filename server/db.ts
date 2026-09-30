import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, blogPosts, projects, skills, contactMessages, InsertBlogPost, InsertProject, InsertSkill, InsertContactMessage } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Blog queries
export async function getBlogPosts(published?: boolean) {
  const db = await getDb();
  if (!db) return [];
  const query = published !== undefined ? db.select().from(blogPosts).where(eq(blogPosts.published, published ? 1 : 0)).orderBy(desc(blogPosts.createdAt)) : db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  return query;
}

export async function getBlogPostById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createBlogPost(post: InsertBlogPost) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(blogPosts).values(post);
  return result;
}

export async function updateBlogPost(id: number, post: Partial<InsertBlogPost>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(blogPosts).set(post).where(eq(blogPosts.id, id));
}

export async function deleteBlogPost(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.delete(blogPosts).where(eq(blogPosts.id, id));
}

// Project queries
export async function getProjects(published?: boolean) {
  const db = await getDb();
  if (!db) return [];
  const query = published !== undefined ? db.select().from(projects).where(eq(projects.published, published ? 1 : 0)).orderBy(desc(projects.createdAt)) : db.select().from(projects).orderBy(desc(projects.createdAt));
  return query;
}

export async function getProjectById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createProject(project: InsertProject) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(projects).values(project);
}

export async function updateProject(id: number, project: Partial<InsertProject>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(projects).set(project).where(eq(projects.id, id));
}

export async function deleteProject(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.delete(projects).where(eq(projects.id, id));
}

// Skills queries
export async function getSkills() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(skills).orderBy(skills.order);
}

export async function createSkill(skill: InsertSkill) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(skills).values(skill);
}

export async function updateSkill(id: number, skill: Partial<InsertSkill>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(skills).set(skill).where(eq(skills.id, id));
}

export async function deleteSkill(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.delete(skills).where(eq(skills.id, id));
}

// Contact messages queries
export async function getContactMessages() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
}

export async function createContactMessage(message: InsertContactMessage) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(contactMessages).values(message);
}

export async function markMessageAsRead(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(contactMessages).set({ read: 1 }).where(eq(contactMessages.id, id));
}

export async function deleteContactMessage(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.delete(contactMessages).where(eq(contactMessages.id, id));
}
