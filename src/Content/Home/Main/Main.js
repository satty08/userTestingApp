import React from 'react';
import PlanCard from './PlanCard/PlanCard';
import './Main.css';

function Main() {
  return (
    <div className='main'>
      {/* Main Content */}
      <div className='firstBlock'>
        <div className='leftBlock'>
          <h1>We are here to help you make better products.</h1>
          <p>See what viewers are saying about your product and create better user experience.</p>
        </div>
        <div className='rightBlock'>
          <img className='imageAsset' src='https://www.computersciencedegreehub.com/wp-content/uploads/2020/05/What-is-a-Software-Engineer-1024x683.jpg' alt='workingPerson' />
        </div>
      </div>
      <button className='getStarted'>Get Started!</button>
      <div className='firstBlock'>
        <div className='leftBlock'>
          <img className='imageAsset' src='https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/business-people-working-in-the-office-scaled.jpg' alt='workingPerson' />
        </div>
        <div className='rightBlock'>
          <h1>Build your business like no other.</h1>
          <p>See what viewers are saying about your product and create better user experience.</p>
        </div>
      </div>
      {/* Solutions Section */}
      <div id='solutions' className='solution'>
        <h2>Solutions</h2>
        <div className='solutionCard'>
        <PlanCard
          solutionName="UI-UX Review"
          description="Get real-time review for UI of your website from viewers."
          image="https://www.strety.com/hubfs/images/blog/run-an-effective-team-meeting.png"
         />
         <PlanCard
          solutionName="Product Review"
          description="Get your product reviewed from real viewers and get insight about the success of your product."
          image="https://d2mug8yhikhiqv.cloudfront.net/wp-content/uploads/2018/05/09154216/working-with-stakeholders-in-scrum-730.jpeg"
         />
         <PlanCard
          solutionName="Marketing Strategy"
          description="Devise a proper marketing strategy with help from our experienced marketing professionals."
          image="https://imageio.forbes.com/specials-images/imageserve/61ba38b317eeda72044e781a/Young-creative-business-people-meeting-at-office-/960x0.jpg?format=jpg&width=960"
         />
         </div>
      </div>
      {/* Customer Stories */}
      <div className='customerStories'>
          <h2>Success Stories</h2>
          <p>Hear from our clients as to what they have to say about our platform.</p>
        <button className='getStarted'>Check All Stories!</button>
      </div>
    </div>
  )
}

export default Main