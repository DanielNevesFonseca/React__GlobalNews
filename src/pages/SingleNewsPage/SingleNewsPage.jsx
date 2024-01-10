import styles from "./style.module.scss";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NewsContext } from "../../providers/NewsContext";
import { toast } from "react-toastify";

export const SingleNewsPage = () => {
    const { showNews, setShowNews, newsList, addLike, removeLike } =
        useContext(NewsContext);
    const userId = localStorage.getItem("@KENZIE-FEED:USERID");
    const navigate = useNavigate();

    const [moreNews, setMoreNews] = useState([]);
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(showNews ? showNews.likes : []);

    useEffect(() => {
        if (userId && likes) {
            const like = showNews?.likes.find((like) => like.userId === userId);
            like ? setIsLiked(true) : setIsLiked(false);
        }
        setLikes(showNews ? showNews.likes : []);
    }, [showNews]);

    useEffect(() => {
        if (!showNews) {
            return navigate("/*");
        } else {
            window.scrollTo(0, 0);

            setIsLiked(false);
            const like = showNews.likes.find((like) => like.userId === userId);
            like ? setIsLiked(true) : setIsLiked(false);

            setLikes(showNews ? showNews.likes : []);

            let countNews = 0;

            const newMoreNews = newsList.filter((news) => {
                if (countNews < 2) {
                    if (news.id !== showNews.id) {
                        countNews++;
                        return news;
                    }
                }
                return null;
            });

            setMoreNews(newMoreNews);
        }
    }, [showNews?.id]);

    const postLiked = () => {
        if (!userId) {
            toast.error("Apenas usuários logados podem curtir!");
        } else {
            const like = likes.find((like) => like.userId === userId);

            if (!isLiked) {
                const userLike = {
                    userId: userId,
                    postId: showNews.id,
                };

                !like ? addLike.mutate(userLike) : null;

                setLikes([...likes, userLike]);
            } else {
                like ? removeLike.mutate(like.id) : null;

                const newLikes = likes.filter((like) => like.userId !== userId);
                setLikes(newLikes);
            }

            setIsLiked(!isLiked);
        }
    };

    return (
        <TemplatePage>
            <main
                className={`container default-page ${styles.news__container}`}
            >
                <div className={styles.route}>
                    <Link className="btn-outline-md" to="/">
                        &#8249; Home
                    </Link>
                    <p className="text">&#8250;</p>
                    <h3 className="title3">{showNews?.title}</h3>
                </div>

                <div className={styles.news__box}>
                    <div className={styles.news__title}>
                        <p className="text-sm">Por: {showNews?.owner}</p>
                        <h2 className="title-post">{showNews?.title}</h2>
                    </div>

                    <img src={showNews?.image} alt="imagem" />

                    <div className={styles.like__container}>
                        <button onClick={postLiked}>
                            {isLiked ? (
                                <AiFillHeart size={22} />
                            ) : (
                                <AiOutlineHeart size={22} />
                            )}
                        </button>
                        {likes?.length > 1 ? (
                            <p className="text-sm">{likes.length} Curtidas</p>
                        ) : likes?.length > 0 ? (
                            <p className="text-sm">1 Curtida</p>
                        ) : (
                            <p className="text-sm">
                                Seja o primeiro a curtir este post
                            </p>
                        )}
                    </div>

                    <p className="text">{showNews?.description}</p>
                </div>

                <section className={styles.moreNews__container}>
                    <div>
                        <h1 className="title2">Leia também</h1>
                        <Link className="btn-sm" to="/all-news">
                            Ver tudo
                        </Link>
                    </div>
                    <ul className={styles.moreNews__list}>
                        {moreNews.length > 0 ? (
                            moreNews.map((news) => {
                                return (
                                    <li
                                        key={news.id}
                                        className={styles.moreNews__card}
                                    >
                                        <div>
                                            <img
                                                className={
                                                    styles.moreNews__listImage
                                                }
                                                src={news.image}
                                                alt="imagem"
                                            />
                                            <p className="text-sm">
                                                Por: {news.owner}
                                            </p>
                                            <h3 className="title3">
                                                {news.title}
                                            </h3>
                                        </div>
                                        <button
                                            className="link"
                                            onClick={() => {
                                                setShowNews(news);
                                                navigate("/single-news");
                                            }}
                                        >
                                            Leia mais
                                        </button>
                                    </li>
                                );
                            })
                        ) : (
                            <p className="text">
                                Não há mais posts no momento...
                            </p>
                        )}
                    </ul>
                </section>
            </main>
        </TemplatePage>
    );
};
