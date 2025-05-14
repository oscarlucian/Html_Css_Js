let chatBody = document.getElementById("chatBody");
let chatForm = document.getElementById("chatForm");
let chatSent = document.getElementById("chatSent");

chatForm.addEventListener("submit", (ce) => {
    ce.preventDefault();
    
    const message = chatForm.querySelector("input").value;

    if (message.trim() !== "") {
        chatBody.innerHTML += `
                    <div class="flex justify-end mt-1 items-center gap-2">
                        <button class="cursor-pointer p-2">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <div class="bg-[#075E54] text-white px-4 py-2 rounded-xl
                        rounded-br-none max-w-xs shadow-md">
                            <p>${message}</p>
                            <span class="text-xs text-gray-300 flex justify-end mt-1">Sented time
                                <small class="translate-x-2 translate-y-0.5 text-blue-500 z-0">
                                    <i class="fa-solid fa-check"></i>
                                </small>
                            </span>
                        </div>
                    </div>
        `;

        chatForm.querySelector("input").value = "";
    }

  scrollToBottom();
});
function scrollToBottom() {
    document.getElementById("mainBody").scrollTop =  document.getElementById("mainBody").scrollHeight;
  }

//   Audio js

//   let mediaRecorder;
//   let audioChunks = [];

//   const startBtn = document.getElementById('startBtn');
//   const audioPlayback = document.getElementById('audioPlayback');

  // Ask for microphone access
//   navigator.mediaDevices.getUserMedia({ audio: true })
//     .then(stream => {
//       mediaRecorder = new MediaRecorder(stream);

//       mediaRecorder.ondataavailable = event => {
//         audioChunks.push(event.data);
//       };

//       mediaRecorder.onstop = () => {
//         const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
//         const audioUrl = URL.createObjectURL(audioBlob);
//         audioPlayback.src = audioUrl;
//         audioChunks = [];
//       };

      // Start recording on mousedown
    //   startBtn.addEventListener('mousedown', () => {
    //     audioChunks = [];
    //     mediaRecorder.start();
    //     console.log('Recording started');
    //   });

      // Stop recording on mouseup
    //   startBtn.addEventListener('mouseup', () => {
    //     if (mediaRecorder.state !== 'inactive') {
    //       mediaRecorder.stop();
    //       console.log('Recording stopped');
    //     }
    //   });

      // Also handle touch events for mobile devices
    //   startBtn.addEventListener('touchstart', (e) => {
    //     e.preventDefault(); // prevent simulated mouse event
    //     audioChunks = [];
    //     mediaRecorder.start();
    //     console.log('Recording started (touch)');
    //   });

    //   startBtn.addEventListener('touchend', () => {
    //     if (mediaRecorder.state !== 'inactive') {
    //       mediaRecorder.stop();
    //       console.log('Recording stopped (touch)');
    //     }
    //   });

    // }).catch(err => {
    //   console.error('Microphone access denied:', err);
    //   alert('Microphone access is required to record audio.');
    // });