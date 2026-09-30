import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedAdmin = NonNullable<TrpcContext["user"]> & { role: "admin" };

function createAdminContext(): TrpcContext {
  const admin: AuthenticatedAdmin = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user: admin,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("Admin Panel - Blog Management", () => {
  let ctx: TrpcContext;

  beforeEach(() => {
    ctx = createAdminContext();
  });

  it("should create a blog post", async () => {
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.create({
      title: "Test Blog Post",
      slug: "test-blog-post",
      excerpt: "This is a test excerpt",
      content: "This is the full blog content",
      category: "AI/ML",
      readTime: 5,
      published: 1,
    });

    expect(result).toBeDefined();
  });

  it("should list all blog posts", async () => {
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.all();

    expect(Array.isArray(result)).toBe(true);
  });

  it("should list published blog posts for public", async () => {
    const publicCaller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    });

    const result = await publicCaller.blog.list();

    expect(Array.isArray(result)).toBe(true);
  });
});

describe("Admin Panel - Project Management", () => {
  let ctx: TrpcContext;

  beforeEach(() => {
    ctx = createAdminContext();
  });

  it("should create a project", async () => {
    const caller = appRouter.createCaller(ctx);

    const result = await caller.projects.create({
      title: "Test Project",
      description: "A test project description",
      company: "Test Company",
      technologies: "Flutter,Dart,Firebase",
      features: "Feature 1,Feature 2",
      projectLink: "https://example.com",
      githubLink: "https://github.com/example",
      published: 1,
    });

    expect(result).toBeDefined();
  });

  it("should list all projects", async () => {
    const caller = appRouter.createCaller(ctx);

    const result = await caller.projects.all();

    expect(Array.isArray(result)).toBe(true);
  });
});

describe("Admin Panel - Skills Management", () => {
  let ctx: TrpcContext;

  beforeEach(() => {
    ctx = createAdminContext();
  });

  it("should create a skill", async () => {
    const caller = appRouter.createCaller(ctx);

    const result = await caller.skills.create({
      category: "AI & Machine Learning",
      skillName: "Python",
      proficiency: 90,
      order: 1,
    });

    expect(result).toBeDefined();
  });

  it("should list all skills", async () => {
    const caller = appRouter.createCaller(ctx);

    const result = await caller.skills.list();

    expect(Array.isArray(result)).toBe(true);
  });
});

describe("Admin Panel - Messages Management", () => {
  let ctx: TrpcContext;

  beforeEach(() => {
    ctx = createAdminContext();
  });

  it("should create a contact message (public)", async () => {
    const publicCaller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    });

    const result = await publicCaller.messages.create({
      name: "Test User",
      email: "test@example.com",
      subject: "Test Subject",
      message: "This is a test message",
    });

    expect(result).toBeDefined();
  });

  it("should list all messages (admin only)", async () => {
    const caller = appRouter.createCaller(ctx);

    const result = await caller.messages.list();

    expect(Array.isArray(result)).toBe(true);
  });

  it("should deny message list access to non-admin", async () => {
    const user = {
      id: 2,
      openId: "regular-user",
      email: "user@example.com",
      name: "Regular User",
      loginMethod: "manus",
      role: "user" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    };

    const userCtx: TrpcContext = {
      user,
      req: { protocol: "https", headers: {} } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(userCtx);

    try {
      await caller.messages.list();
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("FORBIDDEN");
    }
  });
});
