const test = require('node:test');
const assert = require('node:assert');
const http = require('http');
const express=require('express')


const app=express()
const users = ["helmi", "hamma", "salma"];
app.get("/", (req, res) => res.status(200).json(users));

const server = app.listen(3000, () => {
  console.log("Test server running... on port 3000");
});

test('GET / should return JSON array of users', async (t) => {
  const res = await new Promise((resolve) => {
    http.get('http://localhost:3000', resolve);
  });

  let rawData = '';
  for await (const chunk of res) {
    rawData += chunk;
  }

  const data = JSON.parse(rawData);
  const expected = ["helmi", "hamma", "salma"];

  assert.deepStrictEqual(data, expected);

  server.close()
});
