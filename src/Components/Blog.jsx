import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="grid gird-cols-1 lg:grid-cols:1 gap-2 border-2 border-slate-900 rounded p-5 m-3">
        <div>
          <h1 className="font-bold text-2xl mt-2">
            Q1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <p className="mt-3">
            <span className="text-xl font-bold">Access Token</span>
            Access token and refresh token are commonly used to for
            authenticatin. The purpose of access token is to grant access for
            specific resources or actions<br></br>
            <span className="block">
              Storage:Client storage for authentication purpose
            </span>
            <br></br>
            <span className="text-xl font-bold">Refresh Token</span>
            Refresh token is new access token without reauthentication
            <span className="block">
              Storage:Secure client-side storage for token-based authentication.
            </span>
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold">
            Q2. Compare sql and no sql database
          </h1>
          <p className="mt-3">
            <span className="text-xl font-bold">SQl Database</span>
            Structure: Relational data organized into tables with fixed schemas.
            Query Language: Uses Structured Query Language (SQL) for data
            manipulation and retrieval. Transactions: ACID-compliant
            transactions ensure data consistency and integrity.<br></br>
            <span className="block">Sql: Structured Query Language</span>
            <br></br>
            <span className="text-xl font-bold">No SQL</span>
            Structure: Non-relational data with flexible schemas (key-value,
            document, graph, etc.). Scalability: Horizontally scalable,
            distributed across multiple servers or clusters. Flexibility: Allows
            for dynamic and schemaless data models, providing more flexibility
            in data representation.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold mt-2">
            Q3.What is MongoDB aggregate and how does it work ?
          </h1>
          <p className="mt-3">
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold mt-2">
            Q3.What is express js and what is nest js ?
          </h1>
          <p className="mt-3">
            Express.js (Node.js framework): Minimal, flexible framework for
            building web apps/APIs. Handles HTTP requests, routing, middleware,
            and template engines. Simplicity and ease of use are its strengths.
            <br></br>
            NestJS (Node.js framework): Progressive framework using TypeScript.
            Combines Angular concepts with Express.js. Features include
            dependency injection, middleware system, HTTP module, and powerful
            CLI tools. Suitable for scalable, enterprise-grade server-side
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
