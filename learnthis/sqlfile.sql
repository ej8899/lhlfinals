--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Homebrew)
-- Dumped by pg_dump version 14.6 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bookmarks; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.bookmarks (
    id integer NOT NULL,
    resource_id integer,
    profile_id integer,
    is_bookmarked boolean,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.bookmarks OWNER TO vagrant;

--
-- Name: bookmarks_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.bookmarks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bookmarks_id_seq OWNER TO vagrant;

--
-- Name: bookmarks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.bookmarks_id_seq OWNED BY public.bookmarks.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    resource_id integer,
    profile_id integer,
    name character varying(255) NOT NULL,
    index integer NOT NULL,
    description character varying(255),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.categories OWNER TO vagrant;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO vagrant;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: comments; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    resource_id integer,
    profile_id integer,
    comment_id integer,
    comment character varying(2000) NOT NULL,
    is_private boolean,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.comments OWNER TO vagrant;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO vagrant;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: favourites; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.favourites (
    id integer NOT NULL,
    resource_id integer,
    profile_id integer,
    is_favourite boolean,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.favourites OWNER TO vagrant;

--
-- Name: favourites_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.favourites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favourites_id_seq OWNER TO vagrant;

--
-- Name: favourites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.favourites_id_seq OWNED BY public.favourites.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.likes (
    id integer NOT NULL,
    resource_id integer,
    profile_id integer,
    comment_id integer,
    is_liked boolean NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.likes OWNER TO vagrant;

--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.likes_id_seq OWNER TO vagrant;

--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: playlists; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.playlists (
    id integer NOT NULL,
    resource_id integer,
    profile_id integer,
    is_playlist boolean,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.playlists OWNER TO vagrant;

--
-- Name: playlists_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.playlists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.playlists_id_seq OWNER TO vagrant;

--
-- Name: playlists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.playlists_id_seq OWNED BY public.playlists.id;


--
-- Name: profiles; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.profiles (
    id integer NOT NULL,
    user_id integer,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    avatar character varying(255),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.profiles OWNER TO vagrant;

--
-- Name: profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.profiles_id_seq OWNER TO vagrant;

--
-- Name: profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.profiles_id_seq OWNED BY public.profiles.id;


--
-- Name: rankings; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.rankings (
    id integer NOT NULL,
    resource_id integer,
    profile_id integer,
    name character varying(255),
    scale integer NOT NULL,
    note character varying(255),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.rankings OWNER TO vagrant;

--
-- Name: rankings_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.rankings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rankings_id_seq OWNER TO vagrant;

--
-- Name: rankings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.rankings_id_seq OWNED BY public.rankings.id;


--
-- Name: ratings; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.ratings (
    id integer NOT NULL,
    resource_id integer,
    profile_id integer,
    rate integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.ratings OWNER TO vagrant;

--
-- Name: ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ratings_id_seq OWNER TO vagrant;

--
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;


--
-- Name: recommends; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.recommends (
    id integer NOT NULL,
    resource_id integer,
    profile_id integer,
    is_recommended boolean,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.recommends OWNER TO vagrant;

--
-- Name: recommends_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.recommends_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recommends_id_seq OWNER TO vagrant;

--
-- Name: recommends_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.recommends_id_seq OWNED BY public.recommends.id;


--
-- Name: reports; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.reports (
    id integer NOT NULL,
    resource_id integer,
    profile_id integer,
    is_reported boolean,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.reports OWNER TO vagrant;

--
-- Name: reports_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reports_id_seq OWNER TO vagrant;

--
-- Name: reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.reports_id_seq OWNED BY public.reports.id;


--
-- Name: resources; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.resources (
    id integer NOT NULL,
    profile_id integer,
    url character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(3000) NOT NULL,
    thumbnail character varying(255),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.resources OWNER TO vagrant;

--
-- Name: resources_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.resources_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.resources_id_seq OWNER TO vagrant;

--
-- Name: resources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.resources_id_seq OWNED BY public.resources.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.users OWNER TO vagrant;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO vagrant;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: bookmarks id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.bookmarks ALTER COLUMN id SET DEFAULT nextval('public.bookmarks_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: favourites id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.favourites ALTER COLUMN id SET DEFAULT nextval('public.favourites_id_seq'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: playlists id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.playlists ALTER COLUMN id SET DEFAULT nextval('public.playlists_id_seq'::regclass);


--
-- Name: profiles id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.profiles ALTER COLUMN id SET DEFAULT nextval('public.profiles_id_seq'::regclass);


--
-- Name: rankings id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.rankings ALTER COLUMN id SET DEFAULT nextval('public.rankings_id_seq'::regclass);


--
-- Name: ratings id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);


--
-- Name: recommends id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.recommends ALTER COLUMN id SET DEFAULT nextval('public.recommends_id_seq'::regclass);


--
-- Name: reports id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.reports ALTER COLUMN id SET DEFAULT nextval('public.reports_id_seq'::regclass);


--
-- Name: resources id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.resources ALTER COLUMN id SET DEFAULT nextval('public.resources_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: bookmarks; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.bookmarks (id, resource_id, profile_id, is_bookmarked, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	t	2023-02-11 09:43:11.312749	\N	\N
2	1	2	f	2023-02-11 09:43:11.312749	\N	\N
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.categories (id, resource_id, profile_id, name, index, description, created_at, updated_at, deleted_at) FROM stdin;
1	1	2	Ruby	1	\N	2023-02-11 09:43:11.30735	\N	\N
2	1	1	VS Code	2	\N	2023-02-11 09:43:11.30735	\N	\N
3	2	1	JavaScript	3	\N	2023-02-11 09:43:11.30735	\N	\N
\.


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.comments (id, resource_id, profile_id, comment_id, comment, is_private, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	\N	Great Video	f	2023-02-11 09:43:11.30936	\N	\N
2	1	2	1	Yes, it is	f	2023-02-11 09:43:11.30936	\N	\N
3	1	2	\N	I want more	t	2023-02-11 09:43:11.30936	\N	\N
\.


--
-- Data for Name: favourites; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.favourites (id, resource_id, profile_id, is_favourite, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	t	2023-02-11 09:43:11.311796	\N	\N
2	1	2	f	2023-02-11 09:43:11.311796	\N	\N
\.


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.likes (id, resource_id, profile_id, comment_id, is_liked, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	\N	f	2023-02-11 09:43:11.311056	\N	\N
2	2	1	\N	f	2023-02-11 09:43:11.311056	\N	\N
3	1	2	\N	t	2023-02-11 09:43:11.311056	\N	\N
4	2	2	\N	f	2023-02-11 09:43:11.311056	\N	\N
5	1	3	\N	t	2023-02-11 09:43:11.311056	\N	\N
6	2	3	\N	t	2023-02-11 09:43:11.311056	\N	\N
\.


--
-- Data for Name: playlists; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.playlists (id, resource_id, profile_id, is_playlist, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	t	2023-02-11 09:43:11.312313	\N	\N
2	1	2	f	2023-02-11 09:43:11.312313	\N	\N
\.


--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.profiles (id, user_id, first_name, last_name, avatar, created_at, updated_at, deleted_at) FROM stdin;
1	1	John	Stewart	https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png	2023-02-11 09:43:11.297183	\N	\N
2	2	George	Michael	https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png	2023-02-11 09:43:11.297183	\N	\N
3	3	Tristan	Jacobs	https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png	2023-02-11 09:43:11.297183	\N	\N
4	4	Jane	Smith	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-11 09:43:11.297183	\N	\N
5	5	Lucy	Milton	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-11 09:43:11.297183	\N	\N
6	6	Gloria	Sanders	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-11 09:43:11.297183	\N	\N
7	7	Roger	Roger	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-11 09:43:11.297183	\N	\N
\.


--
-- Data for Name: rankings; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.rankings (id, resource_id, profile_id, name, scale, note, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	Intermediate	7	\N	2023-02-11 09:43:11.310001	\N	\N
2	1	2	Intermediate	24	\N	2023-02-11 09:43:11.310001	\N	\N
3	1	3	Intermediate	82	\N	2023-02-11 09:43:11.310001	\N	\N
4	2	1	Intermediate	21	\N	2023-02-11 09:43:11.310001	\N	\N
5	2	2	Beginner	3	Good to start	2023-02-11 09:43:11.310001	\N	\N
\.


--
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.ratings (id, resource_id, profile_id, rate, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	4	2023-02-11 09:43:11.308584	\N	\N
2	2	1	2	2023-02-11 09:43:11.308584	\N	\N
3	2	3	5	2023-02-11 09:43:11.308584	\N	\N
4	2	2	5	2023-02-11 09:43:11.308584	\N	\N
\.


--
-- Data for Name: recommends; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.recommends (id, resource_id, profile_id, is_recommended, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	t	2023-02-11 09:43:11.313222	\N	\N
2	1	2	f	2023-02-11 09:43:11.313222	\N	\N
\.


--
-- Data for Name: reports; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.reports (id, resource_id, profile_id, is_reported, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	t	2023-02-11 09:43:11.315479	\N	\N
2	1	2	f	2023-02-11 09:43:11.315479	\N	\N
\.


--
-- Data for Name: resources; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.resources (id, profile_id, url, title, description, thumbnail, created_at, updated_at, deleted_at) FROM stdin;
1	1	https://www.youtube.com/watch?v=t_ispmWmdjY	Ruby Programming Language - Full Course	Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics using the ruby language.\nWant more from Mike? He ISs starting a coding RPG/Bootcamp	https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=738%2C320&ssl=1	2023-02-11 09:43:11.304591	\N	\N
2	2	https://www.youtube.com/watch?v=_y9oxzTGERs	Introduction to JavaScript	This course introduces you to JavaScript, the most popular programming language for web development. You can also try the interactive version of the course here: https://scrimba.com/g/gintrotojavascript\n\n  The course contains 14 lessons and 7 challenges. In the challenges, you will be encourage to jump into the code and get your hands dirty. This is both fun and great for making the knowledge stick.	https://i.ytimg.com/vi/_y9oxzTGERs/sddefault.jpg	2023-02-11 09:43:11.304591	\N	\N
3	2	https://www.youtube.com/watch?v=RvYYCGs45L4	(177) JavaScript Promise in 100 Seconds - YouTube	creating promises	https://i.ytimg.com/vi/RvYYCGs45L4/sddefault.jpg	2023-02-11 15:08:50.352357	\N	\N
4	2	https://www.youtube.com/watch?v=2OTq15A5s0Y	(181) 7 better ways to create a React app - YouTube	df	https://i.ytimg.com/vi/2OTq15A5s0Y/sddefault.jpg	2023-02-11 15:36:48.255482	\N	\N
5	2	https://www.youtube.com/watch?v=qz0aGYrrlhU	(184) HTML Tutorial for Beginners: HTML Crash Course - YouTube	HTML for beginners	https://i.ytimg.com/vi/qz0aGYrrlhU/sddefault.jpg	2023-02-11 15:49:35.888575	\N	\N
6	2	https://www.youtube.com/watch?v=Zxf1mnP5zcw&list=PLIXshOI36pz62Ej0E5au_GYUHYEo-DSXC&index=19&t=1283s	(184) Google Maps JavaScript API Tutorial - YouTube	In this video I will work a little bit with the Google Maps API as requested by some of my subscribers. We will implement a map with some custom markers, inf...	https://i.ytimg.com/vi/Zxf1mnP5zcw/sddefault.jpg	2023-02-11 15:51:05.518287	\N	\N
7	2	https://www.youtube.com/watch?v=TVFu4-Kd4oM&list=PLIXshOI36pz62Ej0E5au_GYUHYEo-DSXC&index=21	How To Make A Responsive Coffee Shop Website Design Using HTML - CSS - JavaScript || From Scratch - YouTube	how to make a complete responsive online coffee shop website design template using html css and vanilla javascript step by step.create a complete responsive ...	https://i.ytimg.com/vi/TVFu4-Kd4oM/sddefault.jpg	2023-02-11 16:08:44.680236	\N	\N
8	2	https://mui.com/	MUI: The React component library you always wanted	MUI provides a simple, customizable, and accessible library of React components. Follow your own design system, or start with Material Design.	https://storage.screenshotapi.net/mui_com__5f02e3f76ad7.png	2023-02-11 16:29:54.386154	\N	\N
9	2	https://reactrouter.com/en/main/routers/picking-a-router	Picking a Router v6.8.1 | React Router		https://storage.screenshotapi.net/reactrouter_com_en_main_routers_picking_a_router_db93a45d18c5.png	2023-02-12 10:58:37.369478	\N	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY public.users (id, email, password, created_at, updated_at, deleted_at) FROM stdin;
1	johnstewart@test.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-11 09:43:11.290446	\N	\N
2	george@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-11 09:43:11.290446	\N	\N
3	tjacobs@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-11 09:43:11.290446	\N	\N
4	jane@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-11 09:43:11.290446	\N	\N
5	lucyloo@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-11 09:43:11.290446	\N	\N
6	gsanders@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-11 09:43:11.290446	\N	\N
7	rroger@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-11 09:43:11.290446	\N	\N
\.


--
-- Name: bookmarks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.bookmarks_id_seq', 2, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.categories_id_seq', 3, true);


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.comments_id_seq', 3, true);


--
-- Name: favourites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.favourites_id_seq', 2, true);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.likes_id_seq', 6, true);


--
-- Name: playlists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.playlists_id_seq', 2, true);


--
-- Name: profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.profiles_id_seq', 7, true);


--
-- Name: rankings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.rankings_id_seq', 5, true);


--
-- Name: ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.ratings_id_seq', 4, true);


--
-- Name: recommends_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.recommends_id_seq', 2, true);


--
-- Name: reports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.reports_id_seq', 2, true);


--
-- Name: resources_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.resources_id_seq', 9, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: bookmarks bookmarks_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.bookmarks
    ADD CONSTRAINT bookmarks_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: favourites favourites_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT favourites_pkey PRIMARY KEY (id);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: playlists playlists_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.playlists
    ADD CONSTRAINT playlists_pkey PRIMARY KEY (id);


--
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);


--
-- Name: rankings rankings_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.rankings
    ADD CONSTRAINT rankings_pkey PRIMARY KEY (id);


--
-- Name: ratings ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);


--
-- Name: recommends recommends_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.recommends
    ADD CONSTRAINT recommends_pkey PRIMARY KEY (id);


--
-- Name: reports reports_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_pkey PRIMARY KEY (id);


--
-- Name: resources resources_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: bookmarks bookmarks_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.bookmarks
    ADD CONSTRAINT bookmarks_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: bookmarks bookmarks_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.bookmarks
    ADD CONSTRAINT bookmarks_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: categories categories_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: categories categories_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: comments comments_comment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES public.comments(id) ON DELETE CASCADE;


--
-- Name: comments comments_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: comments comments_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: favourites favourites_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT favourites_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: favourites favourites_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT favourites_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: likes likes_comment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES public.comments(id) ON DELETE CASCADE;


--
-- Name: likes likes_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: likes likes_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: playlists playlists_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.playlists
    ADD CONSTRAINT playlists_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: playlists playlists_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.playlists
    ADD CONSTRAINT playlists_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: profiles profiles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: rankings rankings_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.rankings
    ADD CONSTRAINT rankings_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: rankings rankings_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.rankings
    ADD CONSTRAINT rankings_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: ratings ratings_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: ratings ratings_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: recommends recommends_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.recommends
    ADD CONSTRAINT recommends_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: recommends recommends_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.recommends
    ADD CONSTRAINT recommends_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: reports reports_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: reports reports_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: resources resources_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

