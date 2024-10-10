// Import necessary modules and components
import React from "react";          // React is needed to create functional components
import Card from "react-bootstrap/Card";  // Bootstrap Card component for a styled card layout
import { ImPointRight } from "react-icons/im";  // Importing an icon from react-icons for bullet points

// Functional component to display an "About Me" card
function AboutCard() {
  return (
    // Bootstrap Card component with a custom class for styling the card view
    <Card className="quote-card-view">
      <Card.Body>
        {/* Blockquote element for displaying a quote and personal info */}
        <blockquote className="blockquote mb-0">
          
          {/* Paragraph with inline styles and spans for personalized text */}
          <p style={{ textAlign: "justify" }}>
            {/* Introducing yourself with styled text */}
            Hi Everyone, I am <span className="purple">Jeffrey Liu </span>
            from <span className="purple"> Memphis, Tennessee.</span>
            <br />
            {/* Mentioning previous work experience */}
            I previously worked as a Software Engineer Intern at Qualcomm in San Diego, CA.
            <br />
            {/* Current academic background */}
            I am currently completing a double major in Computer Science and Mathematics at UCLA.
            <br />
            <br />
            {/* Introducing hobbies and interests */}
            Apart from coding, some other activities that I love to do!
          </p>
          
          {/* List of activities or hobbies */}
          <ul>
            {/* Each activity is displayed as a list item (<li>) with an icon from react-icons */}
            <li className="about-activity">
              {/* Using an icon (ImPointRight) before each item for visual appeal */}
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Lifting, Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* A quote with a different text color for emphasis */}
          <p style={{ color: "rgb(155 126 172)" }}>
            "We suffer more often in imagination than in reality."{" "}
          </p>
          {/* Footer is used here to give credit for the quote or to provide additional attribution */}
          <footer className="blockquote-footer">Jeffrey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

// Export the AboutCard component so it can be used in other parts of the application
export default AboutCard;
