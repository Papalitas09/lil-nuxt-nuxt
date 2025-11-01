export function ChangePage(){
    const activePage = useState<string>('activePage', () => '/')

    function goTo(path? : string){
        if(path){
            activePage.value = path
            return navigateTo(path)
        }
    }

    return {activePage ,goTo}
}