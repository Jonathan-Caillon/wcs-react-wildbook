const Skill = ({ skill }) => {
  return (
    <li>
      {skill.title}
      <span className="votes">{skill.votes}</span>
    </li>
  );
};

export default Skill;
