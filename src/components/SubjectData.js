import { useNavigate } from 'react-router-dom';
import SubjectsData from '../constant';

export function SubjectData() {
  const navigate = useNavigate();

  const handleNavigation = (subject) => {
    if (subject === 'python') {
      navigate('/python');
    } else if (subject === 'css') {
      navigate('/css');
    }  else if (subject === 'angular') {
      navigate('/angular');
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(SubjectsData).map(subject => (
          <div 
            key={`${subject}-${SubjectsData.id}`} 
            className="bg-gray-300 text-black rounded-lg shadow-md p-4 cursor-pointer" 
            onClick={() => handleNavigation(subject)}
          >
            <h2 className="text-xl font-bold text-black">
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </h2>
            {SubjectsData[subject].map((item, index) => (
              <div key={`${subject}-${item.name}`} className="mt-2 text-black">
                <h3 className="text-lg font-semibold !text-black">{item.title}</h3>
                <p className="text-black">{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
