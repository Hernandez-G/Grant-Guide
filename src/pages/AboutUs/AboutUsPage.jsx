import './AboutUs.css'
import { link } from 'react-router-dom'
import { engineers, designers, analysts, gaAdvisors, topLeaders } from './AboutData'

export default function AboutUs() {
    // Engineers, Designers, Data
    function peopleLayout(person) {
        const { name, img, title, resume, linkedIn } = person
        return (
            <div class="bg-white rounded-lg shadow-lg">
                <img src={ img } alt={ name } class="rounded-t-lg w-full"/>
                <div class="p-6">
                    <div class='flex-col justify-between'>
                        <div className='card-top'>
                            <h2 class="font-bold mb-2 text-2xl text-purple-800 flex-auto">{ name }</h2>
                            <p class="text-purple-700 mb-2">{ title }</p>
                        </div>
                        
                        <div className='card-bottom' class="flex justify-between">
                            <a target="_blank" href={ resume } class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                            <a className='Link' target="_blank" href={ linkedIn } class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const engineersMap = engineers.map(engineer => {
        return peopleLayout(engineer)
    })
    const designersMap = designers.map(designer => {
        return peopleLayout(designer)
    })
    const analystsMap = analysts.map(analyst => {
        return peopleLayout (analyst)
    })
    // GA Advisors and Top Leaders //
    function otherPeopleLayout(person) {
        const { name, img, title } = person
        return (
            <div class="bg-white rounded-lg shadow-lg">
                <img src={ img } alt={ name } class="rounded-t-lg w-full" />
                <div class="p-6">
                    <h2 class="font-bold mb-2 text-2xl text-purple-800">{ name }</h2>
                    <p class="text-purple-700 mb-2">{ title }</p>
                </div>
            </div>
        )
    }
    const gaAdvisorsMap = gaAdvisors.map(advisor => {
        return otherPeopleLayout(advisor)
    })
    const topLeadersMap = topLeaders.map(leader => {
        return otherPeopleLayout(leader)
    })

    return (
        <div className='about-container'>
            <h1 id='MTT' className="MTT" class="text-5xl mb-9 font-bold text-center">Meet the team!</h1>
            <h4 className='problem'>The Problem</h4>
            <p className='statement'>Finding and applying to grants is an extremely complicated and overwhelming process, especially for new applicants. Grant applicants need a centralized way to find available grants as well as someone to talk to in regards to their needs for environmental remediation projects.</p>
                <br></br>
                <br></br>
            <h4 className='solution'>Our Solution</h4>
            <p className='statement'>This website was made through the collaborative effort of UX, software engineering, and data teams to help lower resourced communities find grants through open-sourced federal data.</p>
            {/* <div class="grid grid-cols-6 gap-4 mb-5 w-full "> */}
            <div class="grid grid-cols-4 gap-4 mb-8 w-full ">
                { engineersMap }
            </div>
            {/* <div class="grid grid-cols-6 gap-4 mb-8 w-full "> */}
            <div class="grid grid-cols-4 gap-4 mb-8 w-full ">
                { designersMap }
            </div>
            {/* <div class="grid grid-cols-6 gap-4 mb-8 w-full "> */}
            <div class="grid grid-cols-4 gap-4 mb-8 w-full ">
                { analystsMap }
            </div>

            <h1 id='MTT' className='thanks' >Thank You</h1>
            <h2 className='message'>A special thank you to The Opportunity Project 2022, General Assembly, and the US Census Bureau for creating this chance for us to showcase our skills. We made a product that we are proud of that we believe will help people interested in applying for environmental remediation grants.</h2>

            <h1 className='general'>General Assembly</h1>
            <div class="grid grid-cols-4 gap-4 mb-8 w-full ">
                { gaAdvisorsMap }
            </div>
                {/* TOP LEADERS */}
            <h1 className='top'>TOP Leaders</h1>
            <div class="grid grid-cols-4 gap-4 mb-8 w-full ">
                { topLeadersMap }
            </div>
            {/* <div class="p-20  w-full md:w-1/2"> */}
            {/* <h3 class="text-purple-300 font-bold mb-4">2. Card with image</h3> */}
            {/* <div class="bg-white rounded-lg shadow-lg">
        <img src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="" class="rounded-t-lg" />
        <div class="p-6">
          <h2 class="font-bold mb-2 text-2xl text-purple-800">Justin Hendrick
          </h2>
          <p class="text-purple-700 mb-2">Lead Software Engineer</p>
          <a href="#" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>
        </div> */}

            {/* </div> */}
            {/* </div> */}
        </div>
    )
}