import React from 'react'
import './Article.css'



const Article = () => {
    return (
        <section className=" article_container">

            <div className="container  article_container">
                <div className="row article-header" >
                    <div className="col-lg-12 col-sm-12 col-md-12  ">
                        <hr style={{ "width": "25px", "margin": "auto" }} />
                        {/* <h4 >Hi</h4> */}
                        <h4 >Articles</h4>
                    </div>
                </div>
            </div>

            <div className="container-fluid article-back">
            <div className="row ">
                <div className="col-lg-4 col-md-6 col-sm-12 article_row ">

                    <div className="card edit_card " >
                        <img className="card-img-top  img-fluid" src="/Imges/Self-Improvement-Quotes-To-Help-You-To-Improve-Yourself (1).jpg" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">How To improve your Personality </h5>
                            <p className="card-text">Building a strong character is the ability to define who you are at your best, to become the best version of yourself to face daily challenges.... </p>
                            <button type="button" className="btn btn-2" data-toggle="modal" data-target="#exampleModal">
                                Readmore
                            </button>
                        </div>
                    </div>


                    {/* <!-- Button trigger modal --> */}


                    {/* <!-- Modal --> */}
                    <div className="modal fade mt-5" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog " role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">How To improve your Personality ?</h5>
                                    <button type="button" className="close btn-2" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>
                                        Building a strong character is the ability to define who you are at your best,
                                        to become the best version of yourself to face daily challenges.
                                        Your strong personality affects your relationships with the people you love and that is the key to resilience.
                                        There are some personality traits through which we can identify the strong aspects of personality. These features come from various sources, such as religious texts, children's books, song lyrics, literature, philosophy, psychiatry, youth development, and psychology.

                                        Below we will learn together about some of the basics that will help us know how to increase our knowledge
                                        of ourselves, and how to build a strong personality to meet the various challenges of life

                                    </p>
                                    <h3>1. Increase positive thinking and reduce negative thinking</h3>
                                    <p>
                                        Positive thinking makes you an optimist: you have the power of believing that good things will happen, with this impulse; You are working towards achieving good things in your life, and a little negative thinking is also important; Because it allows you to anticipate what could go wrong, you can then plan and prepare to deal with these situations.
                                    </p>
                                    <h3> 2. Find a strong motivation</h3>

                                    <p>


                                        Motivation helps keep desire burning; This enables you to keep moving forward to achieve your next goals.
                                        Find a strong, positive reason to achieve your goal, this will give you the energy to keep going, no matter how bad the circumstances.
                                    </p>
                                    <h3> 3. concentration </h3>

                                    <p>
                                        Start with one or two goals to achieve and focus on them. Keep your room, home and office clutter-free and clean. This helps keep you focused.
                                    </p>


                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-2" data-dismiss="modal">Close</button>
                                    {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>



                {/* Second  card */}
                <div className="col-lg-4 col-md-6 col-sm-12 article_row ">

                    <div className="card edit_card " >
                        <img className="card-img-top img-fluid" src="/Imges/تطوير-المهارات.jpg" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">How to improve your skills </h5>
                            <p className="card-text"> Every day, new scientific horizons are opened and concepts used in various fields are developed,
                                so it is important... </p>
                            <button type="button" className="btn btn-2" data-toggle="modal" data-target="#exampleModal1">
                                Readmore
                            </button>
                        </div>
                    </div>


                    {/* <!-- Button trigger modal --> */}


                    {/* <!-- Modal --> */}
                    <div className="modal fade mt-5" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog " role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">How to improve your skills ?</h5>
                                    <button type="button" className="close btn-2" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h3>How do you develop your skills in your field of specialization?</h3>
                                    <p>


                                        Every day, new scientific horizons are opened and concepts used in various fields are developed, so it is important to keep pace with these developments to stay in the cycle of development.

                                        The steps to developing skills are simple if you stick to them fully

                                    </p>
                                    <h3> 1. Daily exercise</h3>
                                    <p>

                                        Exercising on a daily basis is the key to success in any field. On your way to developing your skills or acquiring a new skill, you will need to refine it with practical experience, and this experience can be obtained through continuous training. Do not view new technology as a burden or something difficult that cannot be mastered, for everything has a beginning.
                                    </p>
                                    <h3> 2. Time management</h3>

                                    <p>
                                        Exercising on a daily basis is important, but reconciling it with work is the most important, as you certainly do not want to remain unemployed in order to develop your skills, because the time that passes without making a name for yourself is irreplaceable. So always try to organize your time by balancing your daily work with your training to develop your skills, set aside an hour a day for training, and stay away from work pressure and all the things that can distract you.
                                    </p>
                                    <h3>    3. Exercise plan </h3>

                                    <p>

                                        You will not succeed in your life without drawing a clear path for it, as well as in developing skills, it is very important to know the best time to start the exercise, and what points you need to improve, as well as the quality of the exercise itself. First, identify the points that need to be improved or added to your list of skills, and then determine the type of exercises that you will practice to hone these skills.
                                    </p>

                                    <h3> 4. Comfort</h3>
                                    <p>

                                        All of the above points are very important, but comfort is just as important to them. Always try to practice developing your skills while you find yourself ready to receive new information, solve problems that may arise during your training, and if you feel unable to continue, you can rest for a while and do something that frees you from constant thinking. Some workers follow the method of working for 20 minutes, then resting for three minutes, and continuing to work for 20 minutes again by applying the pomodoro in the “I” tool. With the repetition of this process, it was noticed that productivity became better, as the body and mind need rest constantly.
                                    </p>

                                    <h3>5. Reading</h3>
                                    <p>
                                        Reading of all kinds is very important for the human brain, as it activates cells, opens new horizons, and frees the mind from negative thinking and daily work pressures, so always try to devote time to reading, whether reading books or articles. Choosing the right book is the most important, and you can combine the exercise plan with reading by choosing a book related to the specialty you are trying to increase your experience in. Reading new ideas and then implementing them ensures that you build skills faster.</p>


                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-2" data-dismiss="modal">Close</button>
                                    {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Third card */}


                <div className="col-lg-4 col-md-6 col-sm-12 article_row ">

                    <div className="card edit_card " >
                        <img className="card-img-top img-fluid" src="/Imges/1075641.jpg" alt="Card  cap" />
                        <div className="card-body">
                            <h5 className="card-title">How to manage time ?</h5>
                            <p className="card-text">Applying the tips in this article is one of your most important tools in organizing and managing time, and to get more organized and increase..... </p>
                            <button type="button" className="btn btn-2" data-toggle="modal" data-target="#exampleModal2">
                                Readmore
                            </button>
                        </div>
                    </div>


                    {/* <!-- Button trigger modal --> */}


                    {/* <!-- Modal --> */}
                    <div className="modal fade mt-5" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog " role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">How to manage time ?</h5>
                                    <button type="button" className="close btn-2" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h3>How do I manage my time</h3>
                                    <p>
                                        Applying the tips in this article is one of your most important tools in organizing and managing time, and to get more organized and increase productivity, the more you learn to use these tools, the more you will achieve every day, so follow us.


                                        time management methods

                                        There are many ways to help you organize time, whether it is daily, weekly, or even monthly, but the most important of these methods and tips mentioned below is that you adhere to them all the time, so that you do not waste a lot of your time on useless things, and cause you to disable you from performing your tasks Among these tips are:
                                    </p>
                                    <h3> 1. Check the time</h3>
                                    <p>


                                        Know exactly how you spend your time. For example: in the office you have to know which tasks are stealing your time, then you can do something about it. Knowing exactly where your time is going can help you make decisions about delegating tasks or purchasing software needed to speed up some processes.
                                    </p>
                                    <h3> 2. Time limit</h3>

                                    <p>


                                        Setting a deadline for a task can be fun, it can be like a game, some companies divide employees into groups, and the group that finishes a project or task gets a reward first.

                                        You can apply this principle to any task in your day, set a time limit like an hour or two, then try to finish the task on time, and get excited as you do it.
                                    </p>
                                    <h3>  3. Use software tools to manage time
                                    </h3>

                                    <p>


                                        Technology is becoming more and more sophisticated in time management. Various applications help track employee time so you can monitor check-in and check-out processes. The Internet offers a variety of applications and tools, some of which are useful for running a business.
                                    </p>

                                    <h3>
                                        4. Have a to-do list
                                    </h3>
                                    <p>

                                        Having a list is always a time saver, if you have one, you never have to wonder what's on the daily agenda or what to do next, because the list keeps you focused and motivated, and focused on feeling good every time you cancel a task from your list.</p>

                                    <h3>5. Planning for the future</h3>
                                    <p>

                                        Planning ahead is an important part of time management, ideally you should plan ahead for the week or at least the day before, and when you know exactly what to do for the day or week, you'll stay organized and focused.

                                        Break down tasks across days to see how much time is required to complete a project in advance, so even spending just a few minutes planning ahead can change the way you work.</p>


                                    <h3>6. Start with your most important tasks</h3>
                                    <p>

                                        Do your most important tasks in the morning, such as (all those stressful tasks, the bulk of your work, the most difficult tasks) do in the morning, and the reason is that you have the most energy in the morning, so you will be able to deal with tasks efficiently.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-2" data-dismiss="modal">Close</button>
                                    {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            </div>
        </section>
    )
}

export default Article
