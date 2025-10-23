import gsap from 'gsap';
export function AnimateOnScroll(){
    function AnimateScroll(id: string){
        onMounted(async() =>{
           const {ScrollTrigger} = await import('gsap/ScrollTrigger')
           gsap.registerPlugin(ScrollTrigger)
           gsap.from(id, {
             scrollTrigger: id, 
             opacity: 0,
             y: 100, 
             duration: 3
           });
        })
    }
    return AnimateScroll
}
