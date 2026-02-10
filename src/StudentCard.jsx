// File Summary - StudentCard.jsx 
    // This component displays a student's profile card.
    // It accepts props for name, major, bio, and image.
    // It uses state to toggle whether the full bio is shown.
    // Renders a student's profile card with name, major/year, photo, and a toggleable bio.
import React from 'react';

function StudentCard(props) {
// Destructure props from parent component
const { name, major, year, bio, imageUrl } = props;
  // useState manages bio visibility
const [showBio, setShowBio] = React.useState(false);
  // Toggle function: show or hide the bio
const toggleBio = () => {
setShowBio(!showBio);
};
return (
<div style={{
// Card styling. Max width, padding, border, rounded corners, font, text alignment, margin, background color, and shadow.
maxWidth: '350px',
padding: '20px',
border: '1px solid #ccc',
borderRadius: '12px',
fontFamily: 'Arial, sans-serif',
textAlign: 'center',
margin: '20px auto',
backgroundColor: '#f9f9f9',
boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
}}>
<img
src={imageUrl}
// Profile image styling: size, circular shape, object fit, and spacing.
alt={name + "'s profile"}
style={{ width: '100px', height: '100px', borderRadius: '50%',
objectFit: 'cover', marginBottom: '12px' }}
/>
// Name and major/year styling: spacing and font sizes
<h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
<p style={{ margin: '4px 0', fontSize: '16px' }}>{major} –
{year}</p>
<button onClick={toggleBio} style={{
marginTop: '12px',
padding: '8px 16px',
fontSize: '14px',
borderRadius: '6px',
border: 'none',
cursor: 'pointer',
backgroundColor: '#007BFF',
color: 'white'
}}>
// Toggle button changes based on bio visibility
{showBio ? 'Hide Bio' : 'Show Bio'}
</button>
{showBio && <p style={{ marginTop: '16px', fontSize: '14px'
}}>{bio}</p>}
</div>
);
}
// Export the StudentCard component for use in App.jsx
export default StudentCard;