import type { ResumeData } from "@/types/resume"

interface TemplateProps {
  data: ResumeData
  fullPage?: boolean
}

export default function CreativeTemplate({ data, fullPage = false }: TemplateProps) {
  const { personalInfo, experience, education, skills } = data

  return (
    <div className={`${fullPage ? "min-h-[1100px]" : ""} font-[system-ui] grid grid-cols-3`}>
      {/* Sidebar */}
      <div className="bg-purple-900 text-white p-8 col-span-1">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            {personalInfo.firstName}
            <br />
            {personalInfo.lastName}
          </h1>
          <p className="text-purple-200 mt-2 text-sm">{personalInfo.title}</p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-sm uppercase tracking-wider font-semibold mb-3 text-purple-300">Contact</h2>
            <div className="space-y-2 text-sm">
              {personalInfo.email && (
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="break-all">{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {personalInfo.phone}
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {personalInfo.location}
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h2 className="text-sm uppercase tracking-wider font-semibold mb-3 text-purple-300">Skills</h2>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.id} className="bg-purple-800 px-3 py-1 rounded text-sm">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 col-span-2">
        {/* Summary */}
        {personalInfo.summary && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-purple-900 mb-3">About Me</h2>
            <p className="text-gray-700">{personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-purple-900 mb-4">Experience</h2>

            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-purple-200"
                >
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full left-[-6px] top-1.5"></div>
                  <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                  <div className="text-purple-600 font-medium">
                    {exp.company}
                    {exp.location ? `, ${exp.location}` : ""}
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    {exp.startDate} - {exp.endDate}
                  </div>
                  <p className="text-gray-700 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-purple-900 mb-4">Education</h2>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-purple-200"
                >
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full left-[-6px] top-1.5"></div>
                  <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                  <div className="text-purple-600 font-medium">
                    {edu.institution}
                    {edu.location ? `, ${edu.location}` : ""}
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    {edu.startDate} - {edu.endDate}
                  </div>
                  <p className="text-gray-700 whitespace-pre-line">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

