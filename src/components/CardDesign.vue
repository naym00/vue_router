<template>
    <div class="card">
        <div class="card-container">

            <div class="card-image"><img class="responsive-image" src="../assets/fb_banner_studyplex-banner2 1.png"
                    alt="Card image"></div>
            <div class="card-subject">
                <div class="inner-card-subject">
                    <p>এইচ এস সি জীববিজ্ঞান ২য় পত্র</p>
                </div>
            </div>
            <div class="card-offer">
                <p>C</p>
            </div>
            <div class="card-details">
                <p>D</p>
            </div>
            <div class="card-btn-fee">
                <p>E</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'CardDesign',
    //props:['msg']
};
</script>
<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    padding-top: 2%;
    padding-bottom: 2%;
    width: 25%;
    background-color: aqua;
}

.card-container .card-image {
    background-color: antiquewhite;
}

.card-container .card-subject {
    display: flex;
    justify-content: center;
    background-color: black;
}
.card-container .card-subject .inner-card-subject {
    width: 90%;
    font-family: 'Hind Siliguri';
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: left;

    background-color:aliceblue;
}

.card-container .card-offer {
    background-color: blueviolet;
}

.card-container .card-details {
    background-color: brown;
}

.card-container .card-btn-fee {
    background-color: burlywood;
}

.responsive-image {
    width: 100%;
    height: auto;
}
</style>