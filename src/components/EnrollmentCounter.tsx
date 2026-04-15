import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

interface StatisticProps {
  label: string;
  value: number;
}

const Statistic: React.FC<StatisticProps> = ({ label, value }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? value : 0,
    delay: 100,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div
      ref={ref}
      className="bg-[#2E5A27] text-white p-4 rounded-xl shadow-md transform transition duration-300 hover:scale-[1.02]"
    >
      <h3 className="text-sm font-medium uppercase tracking-wide text-[#FFC857] mb-1">
        {label}
      </h3>
      <animated.div className="text-3xl font-bold">
        {number.to((n) => n.toFixed(0))}
      </animated.div>
    </div>
  );
};

const EnrollmentCounter: React.FC = () => {
  const enrollmentData = [
    { label: 'KG', value: 120 },
    { label: 'Lower Primary', value: 231 },
    { label: 'Upper Primary', value: 245 },
    { label: 'JHS', value: 225 },
    { label: 'Total Students', value: 821 },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#2E5A27]">
          Enrollment at a Glance
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {enrollmentData.map((stat, index) => (
            <Statistic key={index} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrollmentCounter;