import syncPage from "./sync_page"
function main(){
    import('./page').then(cModule => {
        cModule()
        console.log('mainModule')
    })
    import('./page2').then(cModule => {
        cModule()
        console.log('mainModule')
    })
    syncPage()
}
main()