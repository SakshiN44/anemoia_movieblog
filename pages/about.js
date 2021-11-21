import React from 'react'

const about = () => {
    return (
        <div className="m-10 lg:ml-20 lg:mr-20">
            <div className="bg-backgrounddark shadow-lg rounded-lg p-8 mb-8"> 
                <h3 className="text-2xl mb-8 text-mtitle font-title border-b pb-4">About Anemoia</h3>
                <div className="bg-background shadow-lg rounded-lg p-4 pb-1 mb-2 "> <p className="text-center text-8xl text-mtitle ml-2 font-title">A</p>
                    <figure class="md:flex bg-gray-100 rounded-xl p-6 md:p-0">
                        <div class="md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                 <p class="text-text ml-2  pb-4">"Watching movies is fun, but figuring out what movie to watch next is a nerve-racking experience. Endlessly scrolling through Netflix, watching trailers on YouTube, looking up IMDb ratings, wasting half an hour and still cannot decide what to watch – does this seem familiar to you? </p>
                                 <p class="text-text ml-2  pb-4">Then you have landed on the right page! Anemoia’s movie recommendation specifically in the - Romantic Genre is the answer to the question “What movie should I watch?”! Your film choices are about to be simplified greatly. </p>
                                 <p class="text-text ml-2  pb-4">The perfect movie for your mood, occasion and individual preferences in just a few minutes! Whether you’re watching a movie by yourself, joining a movie night with friends or going on a movie date with your crush – anemoia is here to guide you to an awesome choice!"</p>
                                 <p class="text-text ml-2 font-medium text-lg pb-2">Give it a try! If you like it, please do comment on your fav post If not, I'll highly appreciate any kind of feedback.</p>                 
                            </blockquote>
                            <figcaption class="font-medium">
                                <div class="text-right text-2xl text-mtitle ml-2 font-title">
                                -- Sakshi Nimje
                                </div>
                                <div class="text-right text-mtitle ml-8 font-text">
                                    Web-Dev Learner, Blogger and Movie Enthusiast
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                </div>
                </div>
            </div>
    )
}

export default about
