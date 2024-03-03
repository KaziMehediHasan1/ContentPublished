
const btnContainer = document.getElementById('btn-container');

const videoCatagories = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    // console.log(data);
    btnHandler(data.data);
};

const btnHandler = (btnAll) =>{
    // console.log(btnAll);
    btnAll.forEach(btnSection =>{
        // console.log(btnSection);
        const div = document.createElement('div');
        btnContainer.classList  = `flex justify-center space-x-14 mt-10`;

        // step 3
        div.innerHTML = `
        <button id="all-videos" onclick='loadFilterVideo(${btnSection.category_id})' class="rounded px-6 btn">${btnSection.category}</button>
        `;
        btnContainer.appendChild(div);
    });
};

// Section loadVideo..
const loadVideo = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const videos = data.data;
    // console.log(videos);
    displayVideo(videos);
};

const loadFilterVideo = async(id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const videos = data.data;
    // console.log(videos);
    displayVideo(videos);
};


// All Button Executed..
const displayVideo = (videos) =>{
    
    // step 1
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    videos.forEach(video =>{
        // console.log(video);
        
        const author = video.authors[0];
        console.log(author);

       

        // Uporer profile array theke data use korte parchinaa..

        // 2 create a div
        const videoCard = document.createElement('div');
        videoCard.classList = `card card-compact bg-base-100 shadow-xl`;
        // 3 set innerHTML ..
        videoCard.innerHTML = `
        <figure class="px-6 pt-10">
            <img src="${video.thumbnail}" alt="thumbnail" class="rounded-xl"/>
        </figure>
        <div class="card-body ml-4">
            <div class='flex gap-x-8'><img class='w-8 rounded-2xl' src='${author.profile_picture}'>
            <p id="video-title" class="card-title"> ${video.title}</p></div>
            <p id="view-count" class='mt-4'>${video.others.views}</p>
        </div>`;

        // 4 append..
        videoContainer.appendChild(videoCard);
    });
};


loadVideo();
// btnHandler();
videoCatagories();