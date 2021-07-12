import app from "../src/app.js";
import supertest from "supertest";

describe("POST /api/items", () => {
  it("returns status 400 for null text", async () => {
    const result = await supertest(app).post("/api/items").send({ text: null });
    expect(result.status).toEqual(400);
  });

  it("returns status 400 for empty text", async () => {
    const result = await supertest(app).post("/api/items").send({ text: "" });
    expect(result.status).toEqual(400);
  });

  it("returns status 400 for undefined text", async () => {
    const result = await supertest(app).post("/api/items").send({});
    expect(result.status).toEqual(400);
  });

  it("returns status 200 for valid text", async () => {
    const result = await supertest(app)
      .post("/api/items")
      .send({ text: "cooooode" });
    expect(result.status).toEqual(201);
  });
});

describe("POST /api/items", () => {
  it("returns status 200 for get items", async () => {
    const result = await supertest(app).get("/api/items");
    expect(result.status).toEqual(200);
  });
});
