"use client";

import { experiences } from "@/utils/constants";
import { useState } from "react";

export default function ExperienceSection() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(
    null
  );

  const toggleExpand = (id: number) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <div className="box w-full space-y-6">
      <h2 className="title-2 !text-gray-900 uppercase !font-medium">
        Expérience
      </h2>
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="border-[1px] border-gray-200/80 rounded-xl overflow-hidden bg-transparent"
        >
          <div
            className="p-4 cursor-pointer flex justify-between items-center hover:bg-gray-50"
            onClick={() => toggleExpand(experience.id)}
          >
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                {experience.role}
              </h3>
              <p className="text-sm text-gray-500">
                {experience.period} | {experience.company} (
                {experience.location})
              </p>
            </div>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-expanded={expandedExperience === experience.id}
              aria-controls={`experience-${experience.id}-content`}
            >
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  expandedExperience === experience.id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          {expandedExperience === experience.id && (
            <div
              id={`experience-${experience.id}-content`}
              className="p-4 border-t bg-gray-50"
            >
              {experience.projects.map((project, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="font-medium text-gray-800 mb-2">
                    {project.title}
                  </h4>
                  {project.missions && project.missions.length > 0 ? (
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-800 mb-2">
                        Missions :
                      </h5>
                      <ul className="list-disc pl-5 space-y-1">
                        {project.missions.map((mission, mIndex) => (
                          <li key={mIndex} className="text-sm text-gray-600">
                            {mission}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    project.description && (
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-gray-700 mb-2">
                          Mission principale :
                        </h5>
                        <p className="text-sm text-gray-600">
                          {project.description}
                        </p>
                      </div>
                    )
                  )}
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">
                      Technologies et outils :
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
