"use client";
import React from "react";

export default function LoginUser() {
  return (
    <main className="bg-gradient-to-br from-blue-400 to-white min-h-screen flex items-center justify-center">
      <nav className="absolute top-0 left-0 w-full p-9 bg-white/45 backdrop-blur-md">
        <div></div>
      </nav>
      <div className=" backdrop-blur-md bg-white/30 border border-white/100 rounded-lg p-6 w-96">
        <form action="">
          <h1 className=" flex justify-center items-center text-blue-400 text-2xl font-bold mb-6">
            Login
          </h1>

          {/* Username */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Username"
              required
              className="text-black w-full pl-10 pr-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAURJREFUSEvF1L8rRXEYx/HXTWaEwSiZLIpVRgulKBaLzWLwa7QopURS/gRZ5FcW/wAlGWQiIykMKKX8OKdc3c69557bOW6+2znn+3zen+fp85ycKp9clfVVCujFIjp+DF1gDsdJBisBjGKTIjOfGMRBOUgSoB43aIgRuUMb3uIgSYDQ4U7CGPpwlBYwjeUEwBRW0wIGsJ8A6MdhWkAdrtEUI3CPdrykBYR1I9gqIRCmaAi7WVKUr+3B0s8efOASszj5iz1I0ij7PSmmmcTD4nKAZswEm9oVzLkTjRHaI85xihU8lHITBxgLBNeDfIcpquQ8YRx70culAJPBr2GtEtUSd4axXfg+CmjFFWpSAl4RavyOKwrYwERK8XzZfGBwIf8QBdyiJSPgDN1xgHfUZgQ8F4Yj2sFXRvEi4/+6aH/STNU7+AYkwS0ZwQsJ3gAAAABJRU5ErkJggg=="
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
          </div>

          {/* Password */}
          <div className="relative mb-4">
            <input
              type="password"
              placeholder="Password"
              required
              className=" text-black w-full pl-10 pr-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPtJREFUSEvt1TFKQ0EQxvFfvIKkEEEQC229go12NuIdhFTBJtgoplBSWOkdrOwEBa9gkcYuKIRU4g1EDWzAPN7L5L0Q0mSrYWf2++9+zO7WzHnU5qxvWsARTrCXNvSCWzxEG5wG0MFpgdA5LiZBIsAx7pPAJe5S3MBZivfxXASJAK/YRRM3GZEhoI0nHFQFfGPlz+86PjMiaxjgC6tVAT9pYdFJo3zYRZFAlF8M4BBX2Il6PJN/S+38+H8+z9s+1kuKj8p72IoAI18rMsZtzzvBEjDmytKivE5bvEUf2Kh4Cd6xGV204VNxje2SkC5aCJ+KkrqTy6MfbWbYL7s+KRl1wSMtAAAAAElFTkSuQmCC"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white rounded-full bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2 mt-4"
          >
            Enter
          </button>
        </form>
      </div>
    </main>
  );
}
