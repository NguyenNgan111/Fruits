import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import clsx from "clsx"
import styles from "./MapList.module.scss"
function MapList(props){
    return (
        <div className={clsx(styles.map)}>
            <div className={clsx(styles.title)}>
                <h2>
                    <span>Cửa hàng</span>
                    <b></b>
                    <b></b>
                </h2>
            </div>
            <div className={clsx(styles.mapContainer)}>
                <div className={clsx(styles.mapHeader)}>
                    <Form>
                        <fieldset>
                            <Form.Group className="mb-3">
                            <Form.Label htmlFor="textInput">Tìm kiếm cửa hàng</Form.Label>
                            <Form.Control id="textInput" placeholder="Chọn tỉnh, thành phố" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Select id="select">
                                <option>Chọn quận, huyện</option>
                            </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                            </Form.Group>
                            <Button type="submit">Tìm kiếm</Button>
                        </fieldset>
                    </Form>
                </div>
                <div className={clsx(styles.mapBody)}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5102927154135!2d106.78483951361117!3d10.848738460824164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752713471f5b15%3A0x1d5dddea640dad31!2zOTcgxJAuIE1hbiBUaGnhu4duLCBIaeG7h3AgUGjDuiwgUXXhuq1uIDksIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1678553275123!5m2!1svi!2s"
                    style={{
                        dislay: "block",
                        width : "100%",
                        height :"500px",
                        border:0
                    }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    )
}
export default MapList