import SubCourses from "../components/SubCourses";
function CourseModal({selectedCourse, setSelectedCourse, navigate, setTempSelected}) {
  return (
    <div class="coursed-modal"
    onClick={()=>setSelectedCourse(null)}
    >
      <div class="coursed-modal-wrapper">
        <div
          class="modal fade"
          id="showSubCoursesModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="showSubCoursesModalLabel"
          aria-hidden="true"
          >
          <div class="modal-dialog">
            <div class="modal-content">
              <button
                type="button"
                class="btn-close modal-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>setSelectedCourse(null)}
              ></button>
              <div class="modal-body">
                <SubCourses navigate={navigate} selectedCourse={selectedCourse} setTempSelected={setTempSelected}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseModal;
