import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, classes }) => {
  return (
    <div
      className={
        "flex p-3 items-center gap-3 bg-gradient-to-br from-zinc-500/30 via-zinc-500/50 to-zinc-500 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg" +
        classes
      }
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
        <img src={imgSrc} width={32} height={32} alt={label} className="" />
      </figure>

      <div>
        <h3>{label}</h3>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
