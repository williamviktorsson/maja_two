<!-- 
    Notera att du kan göra en mapp med ett namn, i detta fall knappar,
    och då kommer navigering till den mappen ladda sidan i index.html
    Du kan också om du vill skippa mappen och bara direkt göra en fil som heter "knappar.svelte" under /routes
    Men jag föredrar undermappar för ofta kommer en sida i en undermapp byggas upp av komponenter som man lägger i den undermappen.
-->

<div class="flex flex-col gap-4">
    <div class="flex flex-row gap-4">
        <button class="btn btn-active">Button</button>
        <button class="btn btn-active btn-primary">Button</button>
        <button class="btn btn-active btn-secondary">Button</button>
        <button class="btn btn-active btn-accent">Button</button>
        <button class="btn btn-active btn-ghost">Button</button>
        <button class="btn btn-active btn-link">Button</button>
    </div>

    <div class="dropdown">
        <label tabindex="0" class="btn m-1">Click</label>
        <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
    </div>

    <!-- The button to open modal -->
    <label for="my-modal-3" class="btn modal-button">open modal</label>

    <!-- Put this part before </body> tag -->
    <div><input type="checkbox" id="my-modal-3" class="modal-toggle" /></div>
    <div class="modal">
        <div class="modal-box relative">
            <label
                for="my-modal-3"
                class="btn btn-sm btn-circle absolute right-2 top-2">✕</label
            >
            <h3 class="text-lg font-bold">
                Congratulations random Interner user!
            </h3>
            <p class="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
            </p>
        </div>
    </div>

    <label class="swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" />

        <!-- sun icon -->
        <svg
            class="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            /></svg
        >

        <!-- moon icon -->
        <svg
            class="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            /></svg
        >
    </label>

    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">Remember me</span>
            <input type="checkbox" checked="checked" class="checkbox" />
        </label>
    </div>

    <div>
        <input
            type="radio"
            name="radio-2"
            class="radio radio-primary"
            checked
        />
        <input type="radio" name="radio-2" class="radio radio-primary" />
    </div>

    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">Red pill</span>
            <input
                type="radio"
                name="radio-6"
                class="radio checked:bg-red-500"
                checked
            />
        </label>
    </div>
    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">blue pill</span>
            <input
                type="radio"
                name="radio-6"
                class="radio checked:bg-blue-500"
                checked
            />
        </label>
    </div>

    <input type="range" min="0" max="100" value="25" class="range" step="25" />
    <div class="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
    </div>
</div>
