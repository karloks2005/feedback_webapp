import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h1>About This Project</h1>
            <p>This project is a simple feedback form that allows users to rate their experience with a service and leave a review. The feedback is then displayed in a list where it can be deleted. The project was created using React and Framer Motion for animations.</p>
            <Link to='/'>Go back</Link>
        </div>
    </Card>
  );
}

export default AboutPage;