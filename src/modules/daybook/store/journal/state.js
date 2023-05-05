export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Donec tristique turpis vel mollis ultrices. Nulla finibus turpis eu felis aliquet tempor. Aliquam efficitur quam in lectus imperdiet, ut gravida risus elementum.",
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Aliquam at congue risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "Nunc pulvinar, sem ac dapibus tristique, nibh risus scelerisque mauris, a volutpat tellus quam a sem. Ut dictum accumsan efficitur.",
            picture: null,
        },
    ],
});
