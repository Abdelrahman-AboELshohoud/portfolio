import React from "react";
import { skills } from "../data/skills";
import * as LucideIcons from "lucide-react";
import { LucideIcon, Monitor, Server, Wrench } from "lucide-react";
import { SkillsShapes } from "./shapes/Shapes";

const Skills: React.FC = () => {
  const categories = ["frontend", "backend", "tools"] as const;

  const getCategoryIcon = (category: (typeof categories)[number]) => {
    switch (category) {
      case "frontend":
        return <Monitor className="w-8 h-8 text-blue-600" />;
      case "backend":
        return <Server className="w-8 h-8 text-emerald-600" />;
      case "tools":
        return <Wrench className="w-8 h-8 text-amber-600" />;
    }
  };

  const getCategoryGradient = (category: (typeof categories)[number]) => {
    switch (category) {
      case "frontend":
        return "from-blue-600 to-indigo-600";
      case "backend":
        return "from-emerald-600 to-green-600";
      case "tools":
        return "from-amber-600 to-orange-600";
    }
  };

  return (
    <section
      id="skills"
      className="relative py-12 md:py-16 bg-gradient-to-br from-gray-50 to-indigo-50 overflow-hidden"
    >
      <SkillsShapes />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r pb-4 from-indigo-600 to-blue-600 text-transparent bg-clip-text">
          Skills & Technologies
        </h2>
        <div className="grid gap-16">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-indigo-50"
            >
              <div className="flex items-center gap-4 mb-8">
                {getCategoryIcon(category)}
                <h3
                  className={`text-2xl font-semibold bg-gradient-to-r ${getCategoryGradient(
                    category
                  )} text-transparent bg-clip-text`}
                >
                  {category === "frontend"
                    ? "Frontend Development"
                    : category === "backend"
                    ? "Backend Development"
                    : "Tools & Technologies"}
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => {
                    const Icon = LucideIcons[
                      skill.icon as keyof typeof LucideIcons
                    ] as LucideIcon;
                    return (
                      <div
                        key={skill.name}
                        className="group p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-indigo-50 hover:border-indigo-100 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-center">
                          {Icon && (
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-br from-${skill.color}-50 to-${skill.color}-100 group-hover:scale-110 transition-transform duration-300`}
                            >
                              <Icon className={`w-6 h-6 ${skill.color}`} />
                            </div>
                          )}
                          <span className="ml-3 text-gray-800 font-medium">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
