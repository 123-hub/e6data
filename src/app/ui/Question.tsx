
import React from 'react';

const Question: React.FC = () => {
  return (
    <div className="font-medium p-4">
      <p className="font-bold text-2xl pb-4">207. Course Schedule</p>
      <p className='font-normal'>
        There are a total of numCourses courses you have to take, labeled
        from 0 to numCourses - 1. You are given an array prerequisites where
        prerequisites[i] = [ai, bi] indicates that you must take course bi
        first if you want to take course ai.
        <br /> <br />
        For example, the pair [0, 1], indicates that to take course 0 you
        have to first take course 1. Return true if you can finish all
        courses. Otherwise, return false.
      </p>
      <p className="py-6">
        <span className="font-bold">Example 1:</span>
        <br />
        <br /> <span className="font-bold">Input:</span> numCourses = 2,
        prerequisites = [[1,0]]
        <br /> <span className="font-bold">Output:</span>
        true
        <br /> <span className="font-bold">Explanation:</span> There are a
        total of 2 courses to take. To take course 1 you should have
        finished course 0. So it is possible.
        <br />
        <br />
        <span className="font-bold">Example 2:</span>
        <br />
        <br /> <span className="font-bold">Input:</span> numCourses = 2,
        prerequisites = [[1,0],[0,1]]
        <br />
        <span className="font-bold">Output:</span> false <br />
        <span className="font-bold">Explanation:</span> There are a total of
        2 courses to take. To take course 1 you should have finished course
        0, and to take course 0 you should also have finished course 1. So
        it is impossible.
      </p>
    </div>
  );
};

export default Question;
