const SkillsCard = ({ icon, title, text }) => {
  return (
    <section>
      <span>{icon}</span>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-slate-500">{text}</p>
    </section>
  );
};
export default SkillsCard;
