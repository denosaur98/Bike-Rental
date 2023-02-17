import React from "react";
import css from '../main/Main.module.css';

function Main() {
    return (
        <>
            <div className={css.main}>
                <div className={css.img}/>
                <div className={css.prices}>
                    <div className={css.price}>Тариф<br/><span className={css.opt}>«Фикс»</span>
                        <p className={css.text}>
                            Подойдет, если знаете точку назначения. Цена поездки фиксированная. Покажем её заранее.
                        </p>
                    </div>
                    <div className={css.price}>Тариф<br/><span className={css.opt}>«Поминутный»</span>
                        <p className={css.text}>
                            Для прогулок по городу. Аренда: от 50 рублей + тариф от 7 рублей в минуту.
                        </p>
                    </div>
                    <div className={css.price}>Опция<br/><span className={css.opt}>«+1 велосипед»</span>
                        <p className={css.text}>
                            Нужна, чтобы забронировать с одного телефона до трёх велосипедов одновременно.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;