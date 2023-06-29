<template>
    <div id='navbar' class="navbar d-flex px-4 py-0">
    <div class="first d-flex mx-2">
        <div class="logo m-auto mx-4">
            <img src="/image/logoPizza-.png" alt="profile Pic" >
        </div>
        <div class="search search__container my-auto mx-1 w-75">
            <input type="search" name="search" id="search" class="search__input w-100 p-2" placeholder="Search">
        </div>
    </div>

    <div class="d-flex">
        <div class="d-flex px-3">
            <div class="notification m-auto px-2">
                <span class="material-icons">notifications</span>
            </div>
            <div class="chat m-auto px-2">
                <img src="/image/icon/message.png'" alt="profile Pic" height="25" width="25">
            </div>
        </div>
        <div class=" px-3 m-auto">
            <img src="/image/icon/userChief.png'" alt="profile Pic" height="40" width="40">
        </div>
    </div>
</div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
export default defineComponent({
})
</script>

<style lang="scss" scoped>
    #navbar {
    height: 60px;
    background: var(--primary);
    .search__input {
        width: 100%;
        background-color: transparent;
        transition: transform 250ms ease-in-out;
        font-size: 14px;
        line-height: 18px;

        color: var(--grey);
        background-color: transparent;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
        background-image: url("../image/icon/search.png");
        background-repeat: no-repeat;
        background-size: 18px 18px;
        background-position: 95% center;
        border-radius: 50px;
        border: 1px solid var(--greyD);
        transition: all 250ms ease-in-out;
        backface-visibility: hidden;
        transform-style: preserve-3d;
    }
    .search__input::placeholder {
        color: color(#575756 a(0.8));
        text-transform: uppercase;
        letter-spacing: 1.5px;
    }
    .search__input:hover,.search__input:focus {
        padding: 12px 0;
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid #575756;
        border-radius: 0;
        background-position: 100% center;
    }
    .first{
        min-width: 30vw;
        width: 600px;
        justify-content: space-between;
    }
    .search input{
        height: 36px;
        width: 100px;
    }
    .logo img{
        height:100%;
        max-height: 50px;
    }

}



/*-----------------------------------------------------------*/


#navbar>div{
    height: 100%;
}
</style>