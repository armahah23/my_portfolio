// src/data/skillsData.js
import { faReact, faNodeJs, faHtml5, faCss3Alt, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faMobileAlt, faPencilRuler } from '@fortawesome/free-solid-svg-icons';

export const skills = [
  { name: "React", icon: faReact, proficiency: 90 },
  { name: "Node.js", icon: faNodeJs, proficiency: 85 },
  { name: "Express.js", icon: faNodeJs, proficiency: 80 }, // Express.js doesn't have a specific icon, using Node.js icon
  { name: "HTML5", icon: faHtml5, proficiency: 95 },
  { name: "CSS3", icon: faCss3Alt, proficiency: 90 },
  { name: "JavaScript", icon: faJsSquare, proficiency: 92 },
  { name: "UI/UX", icon: faPencilRuler, proficiency: 75 },
  { name: "Adobe Photoshop", icon: faPalette, proficiency: 70 },
  { name: "Flutter", icon: faMobileAlt, proficiency: 65 },
];
