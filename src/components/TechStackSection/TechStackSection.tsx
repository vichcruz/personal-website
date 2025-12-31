import pageStyles from "@/app/page.module.css";
import { GraphCanvas, Theme } from "reagraph";
import styles from "./TechStackSection.module.css";

const ring = {
  strong: 120,
  solid: 200,
  exploring: 280,
};

const toRad = (deg: number) => (deg * Math.PI) / 180;
const polar = (radius: number, angleDeg: number) => {
  const angle = toRad(angleDeg);
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
};

const tech = [
  ["react", "React", "strong", -20],
  ["javascript", "JavaScript", "strong", 20],
  ["typescript", "TypeScript", "strong", 60],
  ["nestjs", "NestJS", "solid", -60],
  ["nextjs", "NextJS", "solid", 140],
  ["python", "Python", "solid", 220],
  ["java", "Java", "exploring", -140],
  ["django", "Django", "exploring", -100],
  ["go", "Go", "exploring", 100],
  ["svelte", "Svelte", "exploring", 180],
] as const;

function TechStackSection() {
  const nodes = [
    { id: "me", label: "Me", size: 28, ...polar(0, 0) },
    ...tech.map(([id, label, level, angle]) => ({
      id,
      label,
      size: level === "strong" ? 18 : level === "solid" ? 15 : 12,
      ...polar(ring[level], angle),
      data: { level },
    })),
  ];

  const edges = tech.map(([id, , level]) => ({
    source: "me",
    target: id,
    id: `me-${id}`,
    label:
      level === "strong" ? "strong" : level === "solid" ? "solid" : "exploring",
  }));

  const theme: Theme = {
    canvas: {
      background: undefined,
    },
    node: {
      fill: "#3b82f6",
      activeFill: "#1e40af",
      opacity: 1,
      selectedOpacity: 1,
      inactiveOpacity: 0.3,
      label: {
        color: "#ffffff",
        stroke: undefined,
        activeColor: "#ffffff",
        backgroundColor: undefined,
        backgroundOpacity: 0.8,
        padding: 0,
        strokeColor: undefined,
        strokeWidth: 2,
        radius: 4,
      },
      subLabel: undefined,
    },
    ring: {
      fill: "#60a5fa",
      activeFill: "#3b82f6",
    },
    edge: {
      fill: "#9ca3af",
      activeFill: "#3b82f6",
      opacity: 0.6,
      selectedOpacity: 1,
      inactiveOpacity: 0.2,
      label: {
        color: "#374151",
        stroke: "#ffffff",
        activeColor: "#1e40af",
        fontSize: 12,
      },
      subLabel: undefined,
    },
    arrow: {
      fill: "#9ca3af",
      activeFill: "#3b82f6",
    },
    lasso: {
      background: "rgba(59, 130, 246, 0.1)",
      border: "#3b82f6",
    },
  };

  return (
    <section id="tech-stack" className={pageStyles.section}>
      <div className={styles.skills}>
        <div className={styles.graphContainer}>
          <GraphCanvas
            nodes={nodes}
            edges={edges}
            theme={theme}
            disabled
            edgeArrowPosition="none"
            edgeInterpolation="curved"
            layoutType="concentric2d"
          />
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
