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
      // Optionally, reset the form
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

  return (
    <div className="max-w-6xl shadow-sparkle mx-auto items-center p-8 border border-teal-500 bg-black bg-opacity-30 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6 relative z-[10]">
        <h2 className="text-6xl text-green-300 font-semibold text-center">Creative Assessment</h2>

        

        <div className="flex pt-2 flex-col">
          <label htmlFor="name" className="mb-2 text-lg text-white">Name</label>
          <input className="w-full p-4 border border-gray-300 z-[10] text-lg rounded-md bg-black text-white" id="name" type="text" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-lg text-white">Email</label>
          <input className="w-full p-4 border border-gray-300 z-[10] text-lg rounded-md bg-black text-white" id="email" type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="purpose" className="mb-2 text-lg text-white">What is the purpose of the video?</label>
          <textarea className="w-full p-4 border border-gray-300 z-[10] text-lg rounded-md bg-black text-white" id="purpose" name="purpose" placeholder="What is the purpose of the video?" value={formData.purpose} onChange={handleChange} required rows="4"></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="audience" className="mb-2 text-lg text-white">Who is the target audience?</label>
          <textarea className="w-full p-4 border border-gray-300 z-[10] rounded-md bg-black text-lg text-white" id="audience" name="audience" placeholder="Who is the target audience?" value={formData.audience} onChange={handleChange} rows="3"></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-lg text-white">What key message do you want to convey?</label>
          <textarea className="w-full p-4 border border-gray-300 z-[10] rounded-md bg-black text-white text-lg" id="message" name="message" placeholder="What key message do you want to convey?" value={formData.message} onChange={handleChange} required rows="4"></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="footage" className="mb-2 text-lg text-white">Do you have existing footage that needs to be edited?</label>
          <select className="w-full p-4 border z-[10] border-gray-300 rounded-md bg-black text-white text-lg" id="footage" name="footage" placeholder="Do you have existing footage that needs to be edited?" value={formData.footage} onChange={handleChange} required>
            <option value=""></option>
            <option value="ready">I have footage ready to be edited!</option>
            <option value="none">I have no footage, and would like footage to be created for me.</option>
            <option value="partial">I have partial footage, and would like additional footage to be created for me.</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="music" className="mb-2 text-lg text-white">What type of music or sound effects are you envisioning?</label>
          <select className="w-full p-4 border border-gray-300 z-[10] rounded-md bg-black text-white text-lg" id="music" name="music" value={formData.music} onChange={handleChange} required>
            <option value=""></option>
            <option value="own">My own.</option>
            <option value="curate">Curate a track for this project.</option>
            <option value="no_music">No Music/Add later.</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="captions" className="mb-2 text-lg text-white">Do you require captions or subtitles?</label>
          <select className="w-full p-4 border border-gray-300 z-[10] rounded-md bg-black text-lg text-white" id="captions" name="captions" placeholder="" value={formData.captions} onChange={handleChange} required>
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="scriptwriting" className="mb-2 text-lg text-white">Do you need scriptwriting or storyboard creation services?</label>
          <select className="w-full p-4 border border-gray-300 z-[10] rounded-md bg-black text-lg text-white" id="scriptwriting" name="scriptwriting" placeholder="" value={formData.scriptwriting} onChange={handleChange} required>
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

                      <div className="flex flex-col">
                <label htmlFor="resolution" className="mb-2 text-lg text-white">Video resolution?</label>
                <select className="w-full p-4 border border-gray-300 z-[10] rounded-md bg-black text-lg text-white" id="resolution" name="resolution" placeholder="Video resolution?" value={formData.resolution} onChange={handleChange}>
                  <option value=""></option>
                  <option value="1080p">1080p (1920x1080)</option>
                  <option value="720p">720p (1280x720)</option>
                  <option value="4k">4K (3840x2160)</option>
                </select>
              </div>

                      <div className="flex flex-col">
                        <label htmlFor="aspectRatio" className="mb-2 text-lg text-white">Aspect ratio?</label>
                        <select className="w-full p-4 border border-gray-300 z-[10] rounded-md bg-black text-lg text-white" id="aspectRatio" name="aspectRatio" placeholder="Aspect ratio?" value={formData.aspectRatio} onChange={handleChange}>
                          <option value=""></option>
                          <option value="1:1">1:1 (Square)</option>
                          <option value="16:9">16:9 (Widescreen)</option>
                          <option value="9:16">9:16 (Vertical)</option>
                        </select>
                      </div>


        <div className="flex flex-col">
          <label htmlFor="styleExamples" className="mb-2 text-lg text-white">Examples of desired style and tone?</label>
          <input className="w-full p-4 border z-[10] border-gray-300 rounded-md bg-black text-lg text-white" id="styleExamples" type="text" name="styleExamples" placeholder="Examples of desired style and tone?" value={formData.styleExamples} onChange={handleChange} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="deadline" className="mb-2 text-lg text-white">Deadline for the final video?</label>
          <input className="w-full p-4 border cursor-pointer z-[10] border-gray-300 rounded-md text-lg bg-black text-white" id="deadline" type="text" name="deadline" placeholder="Deadline for the final video?" value={formData.deadline} onChange={handleChange} />
        </div>

        <button className="w-full bg-teal-600 p-4 z-[20] cursor-pointer rounded-md text-2xl text-white hover:bg-cyan-900" type="submit">Submit</button>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CreativeSolutionsForm;
