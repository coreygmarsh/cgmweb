import React, { useState } from 'react';
import axios from 'axios';

const CreativeSolutionsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    audience: '',
    message: '',
    footage: '',
    music: '',
    captions: '',
    scriptwriting: '',
    resolution: '',
    aspectRatio: '',
    styleExamples: '',
    deadline: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cgmweb-4.onrender.com/api/creative-assessment/submit', formData);
      console.log('Form submitted successfully:', response.data);
      setSuccessMessage('Form submitted successfully!');
      setErrorMessage('');
      setFormData({
        name: '',
        email: '',
        purpose: '',
        audience: '',
        message: '',
        footage: '',
        music: '',
        captions: '',
        scriptwriting: '',
        resolution: '',
        aspectRatio: '',
        styleExamples: '',
        deadline: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessMessage('');
      setErrorMessage('Error submitting form. Please try again.');
    }
  };

  const inputClasses = "w-full p-2 sm:p-3 md:p-4 border border-gray-300 rounded-md bg-black text-white text-sm sm:text-base md:text-lg";
  const labelClasses = "mb-1 sm:mb-2 text-sm sm:text-base md:text-lg text-white";

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 border border-teal-500 bg-black bg-opacity-30 rounded-lg shadow-sparkle">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-300 font-semibold text-center mb-4 sm:mb-6">Creative Assessment</h2>

        {[
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'email', label: 'Email', type: 'email' },
          { name: 'purpose', label: 'What is the purpose of the video?', type: 'textarea' },
          { name: 'audience', label: 'Who is the target audience?', type: 'textarea' },
          { name: 'message', label: 'What key message do you want to convey?', type: 'textarea' },
          { name: 'footage', label: 'Do you have existing footage that needs to be edited?', type: 'select', options: [
            { value: 'ready', label: 'I have footage ready to be edited!' },
            { value: 'none', label: 'I have no footage, and would like footage to be created for me.' },
            { value: 'partial', label: 'I have partial footage, and would like additional footage to be created for me.' },
          ]},
          { name: 'music', label: 'What type of music or sound effects are you envisioning?', type: 'select', options: [
            { value: 'own', label: 'My own.' },
            { value: 'curate', label: 'Curate a track for this project.' },
            { value: 'no_music', label: 'No Music/Add later.' },
          ]},
          { name: 'captions', label: 'Do you require captions or subtitles?', type: 'select', options: [
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ]},
          { name: 'scriptwriting', label: 'Do you need scriptwriting or storyboard creation services?', type: 'select', options: [
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ]},
          { name: 'resolution', label: 'Video resolution?', type: 'select', options: [
            { value: '1080p', label: '1080p (1920x1080)' },
            { value: '720p', label: '720p (1280x720)' },
            { value: '4k', label: '4K (3840x2160)' },
          ]},
          { name: 'aspectRatio', label: 'Aspect ratio?', type: 'select', options: [
            { value: '1:1', label: '1:1 (Square)' },
            { value: '16:9', label: '16:9 (Widescreen)' },
            { value: '9:16', label: '9:16 (Vertical)' },
          ]},
          { name: 'styleExamples', label: 'Examples of desired style and tone?', type: 'text' },
          { name: 'deadline', label: 'Deadline for the final video?', type: 'text' },
        ].map((field) => (
          <div key={field.name} className="flex flex-col">
            <label htmlFor={field.name} className={labelClasses}>{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={inputClasses}
                rows="3"
                required
              />
            ) : field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={inputClasses}
                required
              >
                <option value=""></option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            )}
          </div>
        ))}

        <button className="w-full bg-teal-600 p-3 sm:p-4 rounded-md text-lg sm:text-xl md:text-2xl text-white hover:bg-cyan-900 transition-colors duration-300" type="submit">Submit</button>
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CreativeSolutionsForm;