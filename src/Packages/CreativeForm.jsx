import React, { useState } from 'react';

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
    styleExamples: '',
    deadline: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Typically, here you would handle form submission, like sending data to a server
  };

  return (
    <div className="max-w-4xl mx-auto p-8 border border-teal-500 bg-black bg-opacity-30 shadow-2xl rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-6xl text-green-300 font-semibold text-center ">Consultant Assessment</h2>

        <div className="flex pt-2 flex-col">
          <label htmlFor="name" className="mb-2 text-white">Name</label>
          <input className="w-full p-4 border border-gray-300 rounded-md" id="name" type="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-white">Email</label>
          <input className="w-full p-4 border border-gray-300 rounded-md" id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="purpose" className="mb-2 text-white">What is the purpose of the video?</label>
          <textarea className="w-full p-4 border border-gray-300 rounded-md" id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required rows="4"></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="audience" className="mb-2 text-white">Who is the target audience?</label>
          <textarea className="w-full p-4 border border-gray-300 rounded-md" id="audience" name="audience" value={formData.audience} onChange={handleChange} rows="3"></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-white">What key message do you want to convey?</label>
          <textarea className="w-full p-4 border border-gray-300 rounded-md" id="message" name="message" value={formData.message} onChange={handleChange} required rows="4"></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="footage" className="mb-2 text-white">Do you have existing footage that needs to be edited, or will new footage need to be created?</label>
          <select className="w-full p-4 border text-black border-gray-300 rounded-md" id="footage" name="footage" value={formData.footage} onChange={handleChange} required>
            <option value="">Select option</option>
            <option value="ready">I have footage ready to be edited!</option>
            <option value="none">I have no footage, and would like footage to be created for me.</option>
            <option value="partial">I have partial footage, and would like additional footage to be created for me.</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="music" className="mb-2 text-white">What type of music or sound effects are you envisioning?</label>
          <select className="w-full p-4 border border-gray-300 rounded-md" id="music" name="music" value={formData.music} onChange={handleChange} required>
            <option value="">Select option</option>
            <option value="own">My own.</option>
            <option value="curate">Curate a track for this project.</option>
            <option value="no_music">No Music/Add later.</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="captions" className="mb-2 text-white">Do you require captions or subtitles?</label>
          <select className="w-full p-4 border border-gray-300 rounded-md" id="captions" name="captions" value={formData.captions} onChange={handleChange} required>
            <option value="">Select option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="scriptwriting" className="mb-2 text-white">Do you need scriptwriting or storyboard creation services?</label>
          <select className="w-full p-4 border border-gray-300 rounded-md" id="scriptwriting" name="scriptwriting" value={formData.scriptwriting} onChange={handleChange} required>
            <option value="">Select option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="resolution" className="mb-2 text-white">Video resolution or aspect ratios</label>
          <input className="w-full p-4 border border-gray-300 rounded-md" id="resolution" type="text" name="resolution" value={formData.resolution} onChange={handleChange} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="styleExamples" className="mb-2 text-white">Examples of desired style and tone</label>
          <input className="w-full p-4 border border-gray-300 rounded-md" id="styleExamples" type="text" name="styleExamples" value={formData.styleExamples} onChange={handleChange} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="deadline" className="mb-2 text-white">Deadline for the final video</label>
          <input className="w-full p-4 border border-gray-300 rounded-md" id="deadline" type="text" name="deadline" value={formData.deadline} onChange={handleChange} />
        </div>

        <button className="w-full bg-cyan-800 p-4 rounded-md text-2xl text-white hover:bg-cyan-900" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreativeSolutionsForm;
