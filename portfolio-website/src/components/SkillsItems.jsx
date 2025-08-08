

// const SkillsItems = (img, title, level) => {
//   return (
//     <div className="skills-data">
//       <div className="skills-blob">
//         <img src={img} alt="" className="skills-img" />{" "}
//       </div>
//       <h3 className="skills-name">{title}</h3>
//       <span className="skills-level">{level}</span>
//     </div>
//   );
// }

// export default SkillsItems

const SkillsItems = ({ img, title, level }) => {
  // ✅ Destructure props correctly
  return (
    <div className="skills-data">
      <div className="skills-blob">
        <img src={img} alt={title} className="skills-img" />
      </div>
      <h3 className="skills-name">{title}</h3>
      <span className="skills-level">{level}</span>
    </div>
  );
};

export default SkillsItems;