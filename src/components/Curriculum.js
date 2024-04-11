import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../env";
import VideoModel from "./VideoModel";

function Curriculum({ name, semester }) {
    const [fetchVideos, setFetchVideos] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleGet = async () => {
            const auth = JSON.parse(localStorage.getItem("auth"));
            try {
                const response = await axios.get(API_URL + "/videos-list", {
                    headers: {
                        Authorization: "Bearer " + auth,
                    },
                });
                setFetchVideos(response.data.videos);
            } catch (error) {
                // Handle login error
                console.log(error);
            }
        };
        handleGet();
    }, [])

    return (
        <div class="curriculum">
            <div class="common-container">
                <div class="curriculum-wrapper">
                    <div class="title-main">
                        <h2>Curriculum</h2>
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        ستنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                        {
                                            fetchVideos?.map((Item) => (
                                                <div onClick={() => {
                                                    setSelectedVideo(Item);
                                                    setOpen(true);
                                                }}>
                                                    {Item}
                                                </div>
                                            ))
                                        }
                                        {/* <div>
                                        Lecture 1.2 المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل
                                    </div>
                                    <div>
                                        Lecture 1.3 المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                ستنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                                <div class="accordion-body">
                                    <div>
                                         Lecture 1.1 المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل
                                    </div>
                                    <div>
                                         Lecture 1.2 المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل
                                    </div>
                                    <div>
                                        Lecture 1.3 المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل   
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                                <div class="accordion-body">
                                    <div>
                                         Lecture 1.1 المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل
                                    </div>
                                    <div>
                                        Lecture 1.2 المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل
                                    </div>
                                    <div>
                                        Lecture 1.3 المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل   
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFour">
                                <div class="accordion-body">
                                    <div>
                                        Lecture 1.1 المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل
                                    </div>
                                    <div>
                                        Lecture 1.2 المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل
                                    </div>
                                    <div>
                                        Lecture 1.3 المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل
                                    </div>
                                </div>
                                </div>
                            </div> */}
                        </div>
                        <a href="#" class="show-course">Show more sections</a>
                    </div>
                </div>
            </div>
            {
                <VideoModel open={open} setOpen={setOpen} videoLink={`${API_URL}/videos/804/sem1/${selectedVideo}`} setVideoLink={setSelectedVideo}/>
            }
        </div>
    );
}

export default Curriculum;