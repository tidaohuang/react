import { observer } from "mobx-react-lite"



export default observer(function Footer() {
    return (
        <footer className="footer">

            <div className="footer-wrapper">
                <div className="footer-icons">
                    <span className="footer-hightlight">
                        <i className="fa-solid fa-code-branch"></i>
                    </span>
                    <span className="footer-common">
                        <i className="fa fa-triangle-exclamation"></i> 0
                    </span>
                    <span className="footer-common">
                        <i className="fa fa-circle-exclamation"></i> 0
                    </span>
                </div>

                <div className="foot-copyright">
                    Modified at May 28th 2024 &copy; Tidao Huang
                </div>

                <div className="foot-copyright mobile">
                    &copy; Tidao Huang
                </div>
            </div>


        </footer>

    )
})