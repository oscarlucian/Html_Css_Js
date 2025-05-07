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