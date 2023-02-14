--
-- PostgreSQL database dump
--

-- Dumped from database version 10.19 (Ubuntu 10.19-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.19 (Ubuntu 10.19-0ubuntu0.18.04.1)

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

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: bookmarks; Type: TABLE; Schema: public; Owner: development
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


ALTER TABLE public.bookmarks OWNER TO development;

--
-- Name: bookmarks_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.bookmarks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bookmarks_id_seq OWNER TO development;

--
-- Name: bookmarks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.bookmarks_id_seq OWNED BY public.bookmarks.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: development
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


ALTER TABLE public.categories OWNER TO development;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO development;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: comments; Type: TABLE; Schema: public; Owner: development
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


ALTER TABLE public.comments OWNER TO development;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO development;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: favourites; Type: TABLE; Schema: public; Owner: development
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


ALTER TABLE public.favourites OWNER TO development;

--
-- Name: favourites_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.favourites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favourites_id_seq OWNER TO development;

--
-- Name: favourites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.favourites_id_seq OWNED BY public.favourites.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: development
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


ALTER TABLE public.likes OWNER TO development;

--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.likes_id_seq OWNER TO development;

--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: playlists; Type: TABLE; Schema: public; Owner: development
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


ALTER TABLE public.playlists OWNER TO development;

--
-- Name: playlists_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.playlists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.playlists_id_seq OWNER TO development;

--
-- Name: playlists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.playlists_id_seq OWNED BY public.playlists.id;


--
-- Name: profiles; Type: TABLE; Schema: public; Owner: development
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


ALTER TABLE public.profiles OWNER TO development;

--
-- Name: profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.profiles_id_seq OWNER TO development;

--
-- Name: profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.profiles_id_seq OWNED BY public.profiles.id;


--
-- Name: rankings; Type: TABLE; Schema: public; Owner: development
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


ALTER TABLE public.rankings OWNER TO development;

--
-- Name: rankings_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.rankings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rankings_id_seq OWNER TO development;

--
-- Name: rankings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.rankings_id_seq OWNED BY public.rankings.id;


--
-- Name: ratings; Type: TABLE; Schema: public; Owner: development
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


ALTER TABLE public.ratings OWNER TO development;

--
-- Name: ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ratings_id_seq OWNER TO development;

--
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;


--
-- Name: recommends; Type: TABLE; Schema: public; Owner: development
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


ALTER TABLE public.recommends OWNER TO development;

--
-- Name: recommends_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.recommends_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recommends_id_seq OWNER TO development;

--
-- Name: recommends_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.recommends_id_seq OWNED BY public.recommends.id;


--
-- Name: reports; Type: TABLE; Schema: public; Owner: development
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


ALTER TABLE public.reports OWNER TO development;

--
-- Name: reports_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reports_id_seq OWNER TO development;

--
-- Name: reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.reports_id_seq OWNED BY public.reports.id;


--
-- Name: resources; Type: TABLE; Schema: public; Owner: development
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


ALTER TABLE public.resources OWNER TO development;

--
-- Name: resources_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.resources_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.resources_id_seq OWNER TO development;

--
-- Name: resources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.resources_id_seq OWNED BY public.resources.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: development
--


CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.users OWNER TO development;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: development
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO development;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: development
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: bookmarks id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.bookmarks ALTER COLUMN id SET DEFAULT nextval('public.bookmarks_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: favourites id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.favourites ALTER COLUMN id SET DEFAULT nextval('public.favourites_id_seq'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: playlists id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.playlists ALTER COLUMN id SET DEFAULT nextval('public.playlists_id_seq'::regclass);


--
-- Name: profiles id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.profiles ALTER COLUMN id SET DEFAULT nextval('public.profiles_id_seq'::regclass);


--
-- Name: rankings id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.rankings ALTER COLUMN id SET DEFAULT nextval('public.rankings_id_seq'::regclass);


--
-- Name: ratings id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);


--
-- Name: recommends id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.recommends ALTER COLUMN id SET DEFAULT nextval('public.recommends_id_seq'::regclass);


--
-- Name: reports id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.reports ALTER COLUMN id SET DEFAULT nextval('public.reports_id_seq'::regclass);


--
-- Name: resources id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.resources ALTER COLUMN id SET DEFAULT nextval('public.resources_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: bookmarks; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.bookmarks (id, resource_id, profile_id, is_bookmarked, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	t	2023-02-13 11:50:25.243555	\N	\N
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.categories (id, resource_id, profile_id, name, index, description, created_at, updated_at, deleted_at) FROM stdin;
2	1	1	VS Code	2	\N	2023-02-13 11:50:25.221084	\N	\N
3	2	1	JavaScript	3	\N	2023-02-13 11:50:25.221084	\N	\N
4	3	1	JavaScript	1	\N	2023-02-13 12:09:06.367881	\N	\N
5	4	1	React	1	\N	2023-02-13 12:09:36.780099	\N	\N
6	5	1	CSS	1	\N	2023-02-13 12:10:03.817857	\N	\N
7	6	1	React	1	\N	2023-02-13 12:10:29.926772	\N	\N
8	6	1	JavaScript	2	\N	2023-02-13 12:10:29.926772	\N	\N
9	7	1	React	1	\N	2023-02-13 12:10:54.644432	\N	\N
10	8	1	JavaScript	1	\N	2023-02-13 12:11:21.423233	\N	\N
11	9	1	React	1	\N	2023-02-13 12:11:49.037606	\N	\N
12	9	1	JavaScript	2	\N	2023-02-13 12:11:49.037606	\N	\N
13	10	1	CSS	1	\N	2023-02-13 12:12:18.254862	\N	\N
14	11	1	JavaScript	1	\N	2023-02-13 12:12:46.192823	\N	\N
15	12	1	JavaScript	1	\N	2023-02-13 12:13:16.371902	\N	\N
16	12	1	CSS	2	\N	2023-02-13 12:13:16.371902	\N	\N
17	13	1	React	1	\N	2023-02-13 12:13:38.889838	\N	\N
18	14	1	JavaScript	1	\N	2023-02-13 12:15:43.236776	\N	\N
19	15	1	JavaScript	1	\N	2023-02-13 12:16:04.943389	\N	2023-02-13 12:17:49.901847
20	15	1	JavaScript	1	\N	2023-02-13 12:17:49.901847	\N	\N
21	16	1	JavaScript	1	\N	2023-02-13 12:19:01.103901	\N	\N
22	17	1	JavaScript	1	\N	2023-02-13 12:19:38.408619	\N	\N
23	18	1	JavaScript	1	\N	2023-02-13 12:20:12.560057	\N	\N
24	19	1	JavaScript	1	\N	2023-02-13 12:21:14.694699	\N	\N
25	19	1	Python	2	\N	2023-02-13 12:21:14.694699	\N	\N
26	20	1	Ruby	1	\N	2023-02-13 12:21:42.839201	\N	\N
27	20	1	Python	2	\N	2023-02-13 12:21:42.839201	\N	\N
28	21	1	Ruby on Rails	1	\N	2023-02-13 12:22:24.757951	\N	\N
29	21	1	Python	2	\N	2023-02-13 12:22:24.757951	\N	\N
30	21	1	Ruby	3	\N	2023-02-13 12:22:24.757951	\N	\N
31	22	1	PHP	1	\N	2023-02-13 12:23:24.827019	\N	\N
32	22	1	Node.js	2	\N	2023-02-13 12:23:24.827019	\N	\N
33	22	1	Python	3	\N	2023-02-13 12:23:24.827019	\N	\N
34	22	1	Ruby	4	\N	2023-02-13 12:23:24.827019	\N	\N
35	23	1	Ruby	1	\N	2023-02-13 12:23:57.969581	\N	\N
36	23	1	Ruby on Rails	2	\N	2023-02-13 12:23:57.969581	\N	\N
37	24	1	JavaScript	1	\N	2023-02-13 12:24:37.667669	\N	\N
38	25	1	JavaScript	1	\N	2023-02-13 12:25:49.380648	\N	\N
39	26	1	JavaScript	1	\N	2023-02-13 12:26:09.860572	\N	\N
40	27	1	React	1	\N	2023-02-13 12:26:28.153078	\N	\N
41	28	1	React	1	\N	2023-02-13 12:26:52.868489	\N	\N
42	29	1	React	1	\N	2023-02-13 12:27:14.178191	\N	\N
43	30	1	React	1	\N	2023-02-13 12:27:55.055996	\N	\N
44	31	1	React	1	\N	2023-02-13 12:28:18.775681	\N	\N
45	32	1	React	1	\N	2023-02-13 12:28:51.768057	\N	\N
46	33	1	React	1	\N	2023-02-13 12:29:23.401323	\N	\N
47	34	1	React	1	\N	2023-02-13 12:29:44.893683	\N	\N
48	35	1	React	1	\N	2023-02-13 12:30:18.979959	\N	\N
49	36	1	React	1	\N	2023-02-13 12:30:46.930917	\N	\N
50	37	1	JavaScript	1	\N	2023-02-13 12:39:08.742685	\N	\N
51	38	1	React	1	\N	2023-02-13 12:39:53.501873	\N	\N
52	39	1	Ruby	1	\N	2023-02-13 12:40:33.952004	\N	\N
53	40	1	Ruby on Rails	1	\N	2023-02-13 12:42:52.579556	\N	\N
54	40	1	Ruby	2	\N	2023-02-13 12:42:52.579556	\N	\N
55	41	1	Ruby on Rails	1	\N	2023-02-13 12:43:48.636726	\N	\N
56	41	1	Ruby	2	\N	2023-02-13 12:43:48.636726	\N	\N
57	42	1	Ruby	1	\N	2023-02-13 12:44:13.245903	\N	\N
58	43	1	React	1	\N	2023-02-13 12:54:01.00222	\N	\N
59	44	1	React	1	\N	2023-02-13 12:54:52.416009	\N	\N
60	45	1	React	1	\N	2023-02-13 12:55:29.840348	\N	\N
61	46	1	Python	1	\N	2023-02-13 12:56:25.400672	\N	\N
62	47	1	React	1	\N	2023-02-13 13:14:49.866143	\N	\N
63	48	25	CSS	1	\N	2023-02-13 16:05:29.417625	\N	\N
64	49	25	VS Code	1	\N	2023-02-13 16:09:38.144684	\N	\N
65	49	25	JavaScript	2	\N	2023-02-13 16:09:38.144684	\N	\N
66	50	25	JavaScript	1	\N	2023-02-13 16:20:59.007981	\N	\N
67	51	25	VS Code	1	\N	2023-02-13 16:43:40.078822	\N	\N
68	52	25	VS Code	1	\N	2023-02-13 16:44:19.941794	\N	\N
69	53	25	VS Code	1	\N	2023-02-13 16:44:43.989196	\N	\N
70	54	25	React	1	\N	2023-02-13 16:45:14.545347	\N	\N
71	54	25	VS Code	2	\N	2023-02-13 16:45:14.545347	\N	\N
72	55	25	Python	1	\N	2023-02-13 16:45:54.982341	\N	\N
73	56	25	Python	1	\N	2023-02-13 16:46:23.043149	\N	\N
74	58	25	C++	1	\N	2023-02-13 16:48:03.603981	\N	\N
75	59	25	HTML	1	\N	2023-02-13 16:49:13.830911	\N	\N
76	59	25	CSS	2	\N	2023-02-13 16:49:13.830911	\N	\N
77	59	25	JavaScript	3	\N	2023-02-13 16:49:13.830911	\N	\N
78	59	25	VS Code	4	\N	2023-02-13 16:49:13.830911	\N	\N
79	59	25	SQL	5	\N	2023-02-13 16:49:13.830911	\N	\N
80	60	25	JavaScript	1	\N	2023-02-13 16:49:53.627199	\N	\N
81	61	25	VS Code	1	\N	2023-02-13 16:50:16.754735	\N	\N
82	63	25	CSS	1	\N	2023-02-13 16:51:35.519379	\N	\N
83	64	2	JavaScript	1	\N	2023-02-13 17:23:21.007944	\N	\N
84	65	2	React	1	\N	2023-02-13 17:23:43.924747	\N	\N
1	1	2	Ruby	1	\N	2023-02-13 11:50:25.221084	\N	2023-02-13 17:47:03.168728
85	1	2	Ruby	1	\N	2023-02-13 17:47:03.168728	\N	\N
86	66	25	React	1	\N	2023-02-13 17:52:19.661311	\N	\N
87	66	25	JavaScript	2	\N	2023-02-13 17:52:19.661311	\N	\N
88	67	25	JavaScript	1	\N	2023-02-13 18:07:52.803071	\N	\N
89	67	25	React	2	\N	2023-02-13 18:07:52.803071	\N	\N
90	35	2	JavaScript	1	\N	2023-02-13 18:18:53.913254	\N	2023-02-13 18:21:47.692883
91	35	2	JavaScript	1	\N	2023-02-13 18:21:47.692883	\N	\N
\.


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.comments (id, resource_id, profile_id, comment_id, comment, is_private, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	\N	Great Video	f	2023-02-13 11:50:25.227642	\N	\N
2	1	2	1	Yes, it is	f	2023-02-13 11:50:25.227642	\N	\N
4	15	1	\N		t	2023-02-13 12:17:49.901847	\N	\N
3	1	2	\N	I want more	t	2023-02-13 11:50:25.227642	\N	\N
6	35	2	\N	 (TIME 0:02): My Notes Here	t	2023-02-13 18:18:53.913254	\N	\N
\.


--
-- Data for Name: favourites; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.favourites (id, resource_id, profile_id, is_favourite, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	t	2023-02-13 11:50:25.236915	\N	\N
\.


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.likes (id, resource_id, profile_id, comment_id, is_liked, created_at, updated_at, deleted_at) FROM stdin;
4	2	2	\N	f	2023-02-13 11:50:25.234463	\N	\N
5	1	3	\N	t	2023-02-13 11:50:25.234463	\N	\N
6	2	3	\N	t	2023-02-13 11:50:25.234463	\N	\N
149	47	11	\N	t	2023-02-13 14:06:57.585085	\N	\N
150	46	11	\N	t	2023-02-13 14:06:58.148873	\N	\N
53	47	1	\N	t	2023-02-13 13:14:49.866143	\N	\N
52	46	1	\N	t	2023-02-13 12:56:25.400672	\N	\N
51	45	1	\N	t	2023-02-13 12:55:29.840348	\N	\N
50	44	1	\N	t	2023-02-13 12:54:52.416009	\N	\N
46	40	1	\N	t	2023-02-13 12:42:52.579556	\N	\N
47	41	1	\N	t	2023-02-13 12:43:48.636726	\N	\N
48	42	1	\N	t	2023-02-13 12:44:13.245903	\N	\N
49	43	1	\N	t	2023-02-13 12:54:01.00222	\N	\N
45	39	1	\N	t	2023-02-13 12:40:33.952004	\N	\N
43	37	1	\N	t	2023-02-13 12:39:08.742685	\N	\N
44	38	1	\N	t	2023-02-13 12:39:53.501873	\N	\N
42	36	1	\N	t	2023-02-13 12:30:46.930917	\N	\N
38	32	1	\N	t	2023-02-13 12:28:51.768057	\N	\N
40	34	1	\N	t	2023-02-13 12:29:44.893683	\N	\N
39	33	1	\N	t	2023-02-13 12:29:23.401323	\N	\N
41	35	1	\N	t	2023-02-13 12:30:18.979959	\N	\N
36	30	1	\N	t	2023-02-13 12:27:55.055996	\N	\N
35	29	1	\N	t	2023-02-13 12:27:14.178191	\N	\N
37	31	1	\N	t	2023-02-13 12:28:18.775681	\N	\N
34	28	1	\N	t	2023-02-13 12:26:52.868489	\N	\N
33	27	1	\N	t	2023-02-13 12:26:28.153078	\N	\N
32	26	1	\N	t	2023-02-13 12:26:09.860572	\N	\N
31	25	1	\N	t	2023-02-13 12:25:49.380648	\N	\N
30	24	1	\N	t	2023-02-13 12:24:37.667669	\N	\N
26	20	1	\N	t	2023-02-13 12:21:42.839201	\N	\N
27	21	1	\N	t	2023-02-13 12:22:24.757951	\N	\N
28	22	1	\N	t	2023-02-13 12:23:24.827019	\N	\N
29	23	1	\N	t	2023-02-13 12:23:57.969581	\N	\N
25	19	1	\N	t	2023-02-13 12:21:14.694699	\N	\N
24	18	1	\N	t	2023-02-13 12:20:12.560057	\N	\N
23	17	1	\N	t	2023-02-13 12:19:38.408619	\N	\N
22	16	1	\N	t	2023-02-13 12:19:01.103901	\N	\N
17	12	1	\N	t	2023-02-13 12:13:16.371902	\N	\N
18	13	1	\N	t	2023-02-13 12:13:38.889838	\N	\N
19	14	1	\N	t	2023-02-13 12:15:43.236776	\N	\N
20	15	1	\N	t	2023-02-13 12:16:04.943389	\N	\N
16	11	1	\N	t	2023-02-13 12:12:46.192823	\N	\N
15	10	1	\N	t	2023-02-13 12:12:18.254862	\N	\N
14	9	1	\N	t	2023-02-13 12:11:49.037606	\N	\N
13	8	1	\N	t	2023-02-13 12:11:21.423233	\N	\N
12	7	1	\N	t	2023-02-13 12:10:54.644432	\N	\N
11	6	1	\N	t	2023-02-13 12:10:29.926772	\N	\N
10	5	1	\N	t	2023-02-13 12:10:03.817857	\N	\N
9	4	1	\N	t	2023-02-13 12:09:36.780099	\N	\N
8	3	1	\N	t	2023-02-13 12:09:06.367881	\N	\N
2	2	1	\N	t	2023-02-13 11:50:25.234463	\N	\N
1	1	1	\N	t	2023-02-13 11:50:25.234463	\N	\N
101	47	10	\N	t	2023-02-13 14:05:54.858189	\N	\N
102	46	10	\N	t	2023-02-13 14:05:55.472055	\N	\N
103	45	10	\N	t	2023-02-13 14:05:56.16796	\N	\N
104	44	10	\N	t	2023-02-13 14:05:56.707589	\N	\N
105	43	10	\N	t	2023-02-13 14:05:58.03849	\N	\N
106	42	10	\N	t	2023-02-13 14:05:58.827692	\N	\N
107	41	10	\N	t	2023-02-13 14:05:59.373607	\N	\N
108	40	10	\N	t	2023-02-13 14:05:59.985298	\N	\N
109	39	10	\N	t	2023-02-13 14:06:01.324336	\N	\N
110	37	10	\N	t	2023-02-13 14:06:02.063414	\N	\N
111	38	10	\N	t	2023-02-13 14:06:02.835734	\N	\N
112	36	10	\N	t	2023-02-13 14:06:04.211513	\N	\N
113	35	10	\N	t	2023-02-13 14:06:05.964193	\N	\N
114	33	10	\N	t	2023-02-13 14:06:06.722117	\N	\N
115	34	10	\N	t	2023-02-13 14:06:07.38409	\N	\N
116	32	10	\N	t	2023-02-13 14:06:08.042738	\N	\N
117	30	10	\N	t	2023-02-13 14:06:09.250346	\N	\N
118	29	10	\N	t	2023-02-13 14:06:10.115125	\N	\N
119	31	10	\N	t	2023-02-13 14:06:10.734322	\N	\N
120	28	10	\N	t	2023-02-13 14:06:11.276213	\N	\N
121	27	10	\N	t	2023-02-13 14:06:15.808207	\N	\N
122	26	10	\N	t	2023-02-13 14:06:16.482119	\N	\N
123	25	10	\N	t	2023-02-13 14:06:17.132781	\N	\N
124	24	10	\N	t	2023-02-13 14:06:17.854487	\N	\N
126	22	10	\N	t	2023-02-13 14:06:19.855409	\N	\N
127	21	10	\N	t	2023-02-13 14:06:20.509128	\N	\N
128	20	10	\N	t	2023-02-13 14:06:21.149614	\N	\N
129	19	10	\N	t	2023-02-13 14:06:22.369554	\N	\N
131	18	10	\N	t	2023-02-13 14:06:24.030912	\N	\N
132	17	10	\N	t	2023-02-13 14:06:24.604777	\N	\N
133	16	10	\N	t	2023-02-13 14:06:25.31052	\N	\N
134	15	10	\N	t	2023-02-13 14:06:26.767347	\N	\N
135	14	10	\N	t	2023-02-13 14:06:27.416924	\N	\N
136	13	10	\N	t	2023-02-13 14:06:28.016686	\N	\N
137	12	10	\N	t	2023-02-13 14:06:28.929888	\N	\N
138	11	10	\N	t	2023-02-13 14:06:31.170811	\N	\N
139	10	10	\N	t	2023-02-13 14:06:31.736979	\N	\N
140	9	10	\N	t	2023-02-13 14:06:32.676374	\N	\N
141	8	10	\N	t	2023-02-13 14:06:33.989498	\N	\N
142	4	10	\N	t	2023-02-13 14:06:35.064804	\N	\N
143	5	10	\N	t	2023-02-13 14:06:35.740538	\N	\N
145	7	10	\N	t	2023-02-13 14:06:37.76173	\N	\N
146	3	10	\N	t	2023-02-13 14:06:38.823571	\N	\N
147	2	10	\N	t	2023-02-13 14:06:39.829569	\N	\N
148	1	10	\N	t	2023-02-13 14:06:40.227902	\N	\N
151	45	11	\N	t	2023-02-13 14:06:58.703713	\N	\N
152	44	11	\N	t	2023-02-13 14:06:59.229263	\N	\N
153	43	11	\N	t	2023-02-13 14:07:00.530723	\N	\N
154	42	11	\N	t	2023-02-13 14:07:01.203958	\N	\N
155	41	11	\N	t	2023-02-13 14:07:01.877099	\N	\N
156	40	11	\N	t	2023-02-13 14:07:04.834967	\N	\N
157	39	11	\N	t	2023-02-13 14:07:06.168734	\N	\N
158	37	11	\N	t	2023-02-13 14:07:06.708748	\N	\N
159	38	11	\N	t	2023-02-13 14:07:07.25128	\N	\N
160	36	11	\N	t	2023-02-13 14:07:07.873091	\N	\N
161	35	11	\N	t	2023-02-13 14:07:09.020702	\N	\N
162	33	11	\N	t	2023-02-13 14:07:09.580266	\N	\N
163	34	11	\N	t	2023-02-13 14:07:10.306007	\N	\N
164	32	11	\N	t	2023-02-13 14:07:10.925018	\N	\N
165	30	11	\N	t	2023-02-13 14:07:12.048247	\N	\N
166	29	11	\N	t	2023-02-13 14:07:12.638982	\N	\N
167	31	11	\N	t	2023-02-13 14:07:13.257804	\N	\N
168	28	11	\N	t	2023-02-13 14:07:14.037996	\N	\N
169	27	11	\N	t	2023-02-13 14:07:20.393378	\N	\N
170	26	11	\N	t	2023-02-13 14:07:22.534451	\N	\N
171	25	11	\N	t	2023-02-13 14:07:23.392555	\N	\N
172	24	11	\N	t	2023-02-13 14:07:23.755581	\N	\N
173	20	11	\N	t	2023-02-13 14:07:24.489272	\N	\N
174	21	11	\N	t	2023-02-13 14:07:25.261878	\N	\N
175	22	11	\N	t	2023-02-13 14:07:25.868239	\N	\N
176	23	11	\N	t	2023-02-13 14:07:27.324831	\N	\N
177	19	11	\N	t	2023-02-13 14:07:28.990678	\N	\N
178	18	11	\N	t	2023-02-13 14:07:29.639552	\N	\N
179	17	11	\N	t	2023-02-13 14:07:30.31507	\N	\N
180	16	11	\N	t	2023-02-13 14:07:30.990674	\N	\N
181	12	11	\N	t	2023-02-13 14:07:32.091875	\N	\N
182	13	11	\N	t	2023-02-13 14:07:32.638879	\N	\N
183	14	11	\N	t	2023-02-13 14:07:33.412544	\N	\N
184	15	11	\N	t	2023-02-13 14:07:33.98804	\N	\N
185	11	11	\N	t	2023-02-13 14:07:34.790541	\N	\N
186	10	11	\N	t	2023-02-13 14:07:36.079524	\N	\N
187	9	11	\N	t	2023-02-13 14:07:36.706783	\N	\N
188	8	11	\N	t	2023-02-13 14:07:37.403249	\N	\N
189	4	11	\N	t	2023-02-13 14:07:39.004065	\N	\N
190	5	11	\N	t	2023-02-13 14:07:39.912052	\N	\N
191	6	11	\N	t	2023-02-13 14:07:40.691404	\N	\N
192	7	11	\N	t	2023-02-13 14:07:41.123805	\N	\N
193	3	11	\N	t	2023-02-13 14:07:42.287103	\N	\N
194	2	11	\N	t	2023-02-13 14:07:43.321003	\N	\N
195	1	11	\N	t	2023-02-13 14:07:43.766679	\N	\N
196	47	12	\N	t	2023-02-13 14:08:07.601686	\N	\N
197	46	12	\N	t	2023-02-13 14:08:08.170811	\N	\N
198	45	12	\N	t	2023-02-13 14:08:08.920928	\N	\N
199	44	12	\N	t	2023-02-13 14:08:09.489328	\N	\N
200	40	12	\N	t	2023-02-13 14:08:10.494839	\N	\N
201	41	12	\N	t	2023-02-13 14:08:11.029728	\N	\N
202	42	12	\N	t	2023-02-13 14:08:11.641667	\N	\N
203	43	12	\N	t	2023-02-13 14:08:12.153309	\N	\N
3	1	2	\N	t	2023-02-13 11:50:25.234463	\N	\N
125	23	10	\N	t	2023-02-13 14:06:19.480133	\N	\N
204	39	12	\N	t	2023-02-13 14:08:14.060072	\N	\N
205	37	12	\N	t	2023-02-13 14:08:14.753333	\N	\N
206	38	12	\N	t	2023-02-13 14:08:15.31898	\N	\N
207	36	12	\N	t	2023-02-13 14:08:17.435078	\N	\N
208	32	12	\N	t	2023-02-13 14:08:18.681382	\N	\N
209	34	12	\N	t	2023-02-13 14:08:19.768956	\N	\N
210	33	12	\N	t	2023-02-13 14:08:20.366081	\N	\N
211	35	12	\N	t	2023-02-13 14:08:20.974142	\N	\N
212	30	12	\N	t	2023-02-13 14:08:22.025343	\N	\N
213	29	12	\N	t	2023-02-13 14:08:22.559918	\N	\N
214	31	12	\N	t	2023-02-13 14:08:23.14222	\N	\N
215	28	12	\N	t	2023-02-13 14:08:23.747661	\N	\N
216	27	12	\N	t	2023-02-13 14:08:28.443734	\N	\N
217	26	12	\N	t	2023-02-13 14:08:29.034107	\N	\N
218	25	12	\N	t	2023-02-13 14:08:29.748857	\N	\N
219	24	12	\N	t	2023-02-13 14:08:30.274863	\N	\N
220	20	12	\N	t	2023-02-13 14:08:31.765727	\N	\N
221	21	12	\N	t	2023-02-13 14:08:32.532413	\N	\N
222	22	12	\N	t	2023-02-13 14:08:33.064438	\N	\N
223	23	12	\N	t	2023-02-13 14:08:33.985384	\N	\N
224	19	12	\N	t	2023-02-13 14:08:35.024068	\N	\N
225	18	12	\N	t	2023-02-13 14:08:35.664427	\N	\N
226	17	12	\N	t	2023-02-13 14:08:36.462351	\N	\N
227	16	12	\N	t	2023-02-13 14:08:37.147438	\N	\N
228	12	12	\N	t	2023-02-13 14:08:37.897656	\N	\N
229	13	12	\N	t	2023-02-13 14:08:38.633692	\N	\N
230	14	12	\N	t	2023-02-13 14:08:39.533363	\N	\N
231	15	12	\N	t	2023-02-13 14:08:40.100206	\N	\N
232	11	12	\N	t	2023-02-13 14:08:41.155762	\N	\N
233	10	12	\N	t	2023-02-13 14:08:42.60274	\N	\N
234	9	12	\N	t	2023-02-13 14:08:43.449227	\N	\N
235	8	12	\N	t	2023-02-13 14:08:44.691859	\N	\N
236	4	12	\N	t	2023-02-13 14:08:46.190162	\N	\N
237	5	12	\N	t	2023-02-13 14:08:46.827636	\N	\N
238	6	12	\N	t	2023-02-13 14:08:47.819945	\N	\N
239	7	12	\N	t	2023-02-13 14:08:48.330426	\N	\N
240	3	12	\N	t	2023-02-13 14:08:49.511933	\N	\N
241	2	12	\N	t	2023-02-13 14:08:50.0722	\N	\N
242	1	12	\N	t	2023-02-13 14:08:52.044625	\N	\N
243	47	13	\N	t	2023-02-13 14:09:22.835001	\N	\N
246	46	13	\N	t	2023-02-13 14:15:13.984397	\N	\N
247	45	13	\N	t	2023-02-13 14:15:14.511967	\N	\N
248	44	13	\N	t	2023-02-13 14:15:15.286744	\N	\N
249	40	13	\N	t	2023-02-13 14:15:16.62789	\N	\N
250	41	13	\N	t	2023-02-13 14:15:17.729592	\N	\N
251	42	13	\N	t	2023-02-13 14:15:18.423995	\N	\N
252	43	13	\N	t	2023-02-13 14:15:19.104382	\N	\N
253	39	13	\N	t	2023-02-13 14:15:20.213318	\N	\N
254	37	13	\N	t	2023-02-13 14:15:21.072909	\N	\N
255	38	13	\N	t	2023-02-13 14:15:21.526242	\N	\N
256	36	13	\N	t	2023-02-13 14:15:22.253819	\N	\N
257	32	13	\N	t	2023-02-13 14:15:23.30516	\N	\N
258	34	13	\N	t	2023-02-13 14:15:24.152041	\N	\N
259	33	13	\N	t	2023-02-13 14:15:24.757471	\N	\N
260	35	13	\N	t	2023-02-13 14:15:25.50011	\N	\N
261	30	13	\N	t	2023-02-13 14:15:26.700878	\N	\N
262	29	13	\N	t	2023-02-13 14:15:27.49478	\N	\N
263	31	13	\N	t	2023-02-13 14:15:28.441999	\N	\N
264	28	13	\N	t	2023-02-13 14:15:29.226862	\N	\N
265	27	13	\N	t	2023-02-13 14:15:34.288855	\N	\N
266	26	13	\N	t	2023-02-13 14:15:34.818489	\N	\N
267	25	13	\N	t	2023-02-13 14:15:35.468356	\N	\N
268	24	13	\N	t	2023-02-13 14:15:36.353489	\N	\N
269	20	13	\N	t	2023-02-13 14:15:37.176239	\N	\N
270	21	13	\N	t	2023-02-13 14:15:37.928243	\N	\N
271	22	13	\N	t	2023-02-13 14:15:38.713348	\N	\N
272	23	13	\N	t	2023-02-13 14:15:39.190692	\N	\N
273	19	13	\N	t	2023-02-13 14:15:40.727779	\N	\N
274	18	13	\N	t	2023-02-13 14:15:41.57537	\N	\N
275	17	13	\N	t	2023-02-13 14:15:42.225651	\N	\N
276	16	13	\N	t	2023-02-13 14:15:43.005597	\N	\N
279	12	13	\N	t	2023-02-13 14:15:46.134249	\N	\N
280	13	13	\N	t	2023-02-13 14:15:47.502117	\N	\N
281	14	13	\N	t	2023-02-13 14:15:48.126185	\N	\N
282	15	13	\N	t	2023-02-13 14:15:49.054315	\N	\N
283	11	13	\N	t	2023-02-13 14:15:50.395902	\N	\N
284	10	13	\N	t	2023-02-13 14:15:51.442861	\N	\N
285	9	13	\N	t	2023-02-13 14:15:52.817233	\N	\N
286	8	13	\N	t	2023-02-13 14:15:53.905769	\N	\N
287	4	13	\N	t	2023-02-13 14:15:55.462185	\N	\N
288	5	13	\N	t	2023-02-13 14:15:56.456663	\N	\N
289	6	13	\N	t	2023-02-13 14:15:57.224039	\N	\N
290	7	13	\N	t	2023-02-13 14:15:58.027975	\N	\N
291	3	13	\N	t	2023-02-13 14:15:59.051568	\N	\N
292	2	13	\N	t	2023-02-13 14:16:00.082458	\N	\N
293	1	13	\N	t	2023-02-13 14:16:00.733453	\N	\N
294	47	14	\N	t	2023-02-13 14:16:17.740544	\N	\N
295	46	14	\N	t	2023-02-13 14:16:18.304012	\N	\N
296	45	14	\N	t	2023-02-13 14:16:18.886323	\N	\N
297	44	14	\N	t	2023-02-13 14:16:19.521555	\N	\N
298	40	14	\N	t	2023-02-13 14:16:20.978065	\N	\N
299	41	14	\N	t	2023-02-13 14:16:21.570614	\N	\N
300	42	14	\N	t	2023-02-13 14:16:22.190458	\N	\N
301	43	14	\N	t	2023-02-13 14:16:22.750262	\N	\N
302	39	14	\N	t	2023-02-13 14:16:23.751942	\N	\N
303	37	14	\N	t	2023-02-13 14:16:24.534168	\N	\N
304	38	14	\N	t	2023-02-13 14:16:25.086931	\N	\N
305	36	14	\N	t	2023-02-13 14:16:25.696888	\N	\N
306	32	14	\N	t	2023-02-13 14:16:26.769265	\N	\N
307	34	14	\N	t	2023-02-13 14:16:27.592936	\N	\N
308	33	14	\N	t	2023-02-13 14:16:28.386931	\N	\N
309	35	14	\N	t	2023-02-13 14:16:28.964983	\N	\N
310	30	14	\N	t	2023-02-13 14:16:30.116282	\N	\N
311	29	14	\N	t	2023-02-13 14:16:30.716634	\N	\N
312	31	14	\N	t	2023-02-13 14:16:31.642623	\N	\N
313	28	14	\N	t	2023-02-13 14:16:32.665111	\N	\N
314	24	14	\N	t	2023-02-13 14:16:37.125685	\N	\N
315	25	14	\N	t	2023-02-13 14:16:38.274331	\N	\N
316	26	14	\N	t	2023-02-13 14:16:39.085148	\N	\N
317	27	14	\N	t	2023-02-13 14:16:39.874434	\N	\N
318	23	14	\N	t	2023-02-13 14:16:41.175101	\N	\N
319	22	14	\N	t	2023-02-13 14:16:41.856567	\N	\N
320	21	14	\N	t	2023-02-13 14:16:42.632796	\N	\N
321	20	14	\N	t	2023-02-13 14:16:43.417498	\N	\N
322	16	14	\N	t	2023-02-13 14:16:44.715437	\N	\N
323	17	14	\N	t	2023-02-13 14:16:45.252542	\N	\N
324	18	14	\N	t	2023-02-13 14:16:46.182829	\N	\N
325	19	14	\N	t	2023-02-13 14:16:46.60591	\N	\N
326	15	14	\N	t	2023-02-13 14:16:48.067571	\N	\N
327	14	14	\N	t	2023-02-13 14:16:49.034302	\N	\N
328	13	14	\N	t	2023-02-13 14:16:49.553153	\N	\N
329	12	14	\N	t	2023-02-13 14:16:50.233722	\N	\N
330	8	14	\N	t	2023-02-13 14:16:51.547107	\N	\N
331	9	14	\N	t	2023-02-13 14:16:52.267283	\N	\N
332	10	14	\N	t	2023-02-13 14:16:53.167097	\N	\N
333	11	14	\N	t	2023-02-13 14:16:53.871918	\N	\N
334	7	14	\N	t	2023-02-13 14:16:55.365705	\N	\N
335	6	14	\N	t	2023-02-13 14:16:55.882764	\N	\N
336	5	14	\N	t	2023-02-13 14:16:56.581235	\N	\N
337	4	14	\N	t	2023-02-13 14:16:57.264242	\N	\N
338	1	14	\N	t	2023-02-13 14:16:58.786498	\N	\N
339	2	14	\N	t	2023-02-13 14:16:59.57722	\N	\N
340	3	14	\N	t	2023-02-13 14:17:00.1141	\N	\N
341	46	15	\N	t	2023-02-13 14:17:23.089232	\N	\N
342	47	15	\N	t	2023-02-13 14:17:23.892794	\N	\N
343	45	15	\N	t	2023-02-13 14:17:24.677114	\N	\N
344	44	15	\N	t	2023-02-13 14:17:25.689402	\N	\N
345	40	15	\N	t	2023-02-13 14:17:27.503973	\N	\N
346	41	15	\N	t	2023-02-13 14:17:28.492853	\N	\N
347	42	15	\N	t	2023-02-13 14:17:29.275401	\N	\N
348	43	15	\N	t	2023-02-13 14:17:30.074487	\N	\N
349	39	15	\N	t	2023-02-13 14:17:31.052127	\N	\N
350	37	15	\N	t	2023-02-13 14:17:31.962703	\N	\N
351	38	15	\N	t	2023-02-13 14:17:32.554191	\N	\N
352	36	15	\N	t	2023-02-13 14:17:33.068265	\N	\N
353	32	15	\N	t	2023-02-13 14:17:34.461669	\N	\N
354	34	15	\N	t	2023-02-13 14:17:35.251495	\N	\N
355	33	15	\N	t	2023-02-13 14:17:36.103173	\N	\N
356	35	15	\N	t	2023-02-13 14:17:36.681244	\N	\N
357	30	15	\N	t	2023-02-13 14:17:37.890173	\N	\N
358	29	15	\N	t	2023-02-13 14:17:38.725665	\N	\N
359	31	15	\N	t	2023-02-13 14:17:39.56638	\N	\N
360	28	15	\N	t	2023-02-13 14:17:40.230779	\N	\N
361	24	15	\N	t	2023-02-13 14:17:41.391228	\N	\N
362	25	15	\N	t	2023-02-13 14:17:42.166829	\N	\N
363	26	15	\N	t	2023-02-13 14:17:42.941396	\N	\N
364	27	15	\N	t	2023-02-13 14:17:43.694419	\N	\N
365	23	15	\N	t	2023-02-13 14:17:45.017105	\N	\N
366	22	15	\N	t	2023-02-13 14:17:46.243931	\N	\N
367	21	15	\N	t	2023-02-13 14:17:47.144857	\N	\N
368	20	15	\N	t	2023-02-13 14:17:47.799001	\N	\N
369	16	15	\N	t	2023-02-13 14:17:49.12364	\N	\N
370	17	15	\N	t	2023-02-13 14:17:49.933875	\N	\N
371	18	15	\N	t	2023-02-13 14:17:50.427957	\N	\N
372	19	15	\N	t	2023-02-13 14:17:51.440168	\N	\N
373	15	15	\N	t	2023-02-13 14:17:53.172091	\N	\N
374	14	15	\N	t	2023-02-13 14:17:54.182401	\N	\N
375	13	15	\N	t	2023-02-13 14:17:54.589607	\N	\N
376	12	15	\N	t	2023-02-13 14:17:55.244989	\N	\N
377	8	15	\N	t	2023-02-13 14:17:57.004432	\N	\N
378	9	15	\N	t	2023-02-13 14:17:57.800751	\N	\N
379	10	15	\N	t	2023-02-13 14:17:58.474684	\N	\N
380	11	15	\N	t	2023-02-13 14:17:59.472603	\N	\N
381	7	15	\N	t	2023-02-13 14:18:01.108774	\N	\N
382	6	15	\N	t	2023-02-13 14:18:01.95294	\N	\N
383	5	15	\N	t	2023-02-13 14:18:02.438916	\N	\N
384	4	15	\N	t	2023-02-13 14:18:04.507003	\N	\N
385	1	15	\N	t	2023-02-13 14:18:05.881369	\N	\N
386	2	15	\N	t	2023-02-13 14:18:06.658389	\N	\N
387	3	15	\N	t	2023-02-13 14:18:07.764853	\N	\N
388	47	16	\N	t	2023-02-13 14:18:28.497226	\N	\N
389	46	16	\N	t	2023-02-13 14:18:29.002227	\N	\N
390	45	16	\N	t	2023-02-13 14:18:29.766692	\N	\N
391	44	16	\N	t	2023-02-13 14:18:30.32114	\N	\N
392	40	16	\N	t	2023-02-13 14:18:31.609595	\N	\N
393	41	16	\N	t	2023-02-13 14:18:32.2293	\N	\N
394	42	16	\N	t	2023-02-13 14:18:32.893341	\N	\N
395	43	16	\N	t	2023-02-13 14:18:33.587102	\N	\N
396	39	16	\N	t	2023-02-13 14:18:34.733074	\N	\N
397	37	16	\N	t	2023-02-13 14:18:35.36168	\N	\N
398	38	16	\N	t	2023-02-13 14:18:36.025494	\N	\N
399	36	16	\N	t	2023-02-13 14:18:37.083014	\N	\N
400	32	16	\N	t	2023-02-13 14:18:39.280835	\N	\N
401	34	16	\N	t	2023-02-13 14:18:40.655382	\N	\N
402	33	16	\N	t	2023-02-13 14:18:41.233729	\N	\N
403	35	16	\N	t	2023-02-13 14:18:41.859618	\N	\N
404	30	16	\N	t	2023-02-13 14:18:43.227222	\N	\N
405	29	16	\N	t	2023-02-13 14:18:44.172603	\N	\N
406	31	16	\N	t	2023-02-13 14:18:45.212398	\N	\N
407	28	16	\N	t	2023-02-13 14:18:45.816838	\N	\N
408	24	16	\N	t	2023-02-13 14:18:50.383681	\N	\N
409	25	16	\N	t	2023-02-13 14:18:51.129072	\N	\N
410	26	16	\N	t	2023-02-13 14:18:51.991735	\N	\N
411	27	16	\N	t	2023-02-13 14:18:52.74861	\N	\N
412	23	16	\N	t	2023-02-13 14:18:54.18274	\N	\N
413	22	16	\N	t	2023-02-13 14:18:55.095736	\N	\N
414	21	16	\N	t	2023-02-13 14:18:55.75755	\N	\N
415	20	16	\N	t	2023-02-13 14:18:56.149628	\N	\N
416	16	16	\N	t	2023-02-13 14:18:58.620861	\N	\N
417	17	16	\N	t	2023-02-13 14:18:59.420545	\N	\N
418	18	16	\N	t	2023-02-13 14:19:00.850189	\N	\N
419	19	16	\N	t	2023-02-13 14:19:01.509739	\N	\N
420	15	16	\N	t	2023-02-13 14:19:02.867654	\N	\N
421	14	16	\N	t	2023-02-13 14:19:03.516268	\N	\N
422	13	16	\N	t	2023-02-13 14:19:04.142321	\N	\N
423	12	16	\N	t	2023-02-13 14:19:04.86837	\N	\N
424	8	16	\N	t	2023-02-13 14:19:06.351837	\N	\N
425	9	16	\N	t	2023-02-13 14:19:07.115825	\N	\N
426	10	16	\N	t	2023-02-13 14:19:07.925339	\N	\N
427	11	16	\N	t	2023-02-13 14:19:09.20403	\N	\N
428	7	16	\N	t	2023-02-13 14:19:11.24877	\N	\N
429	6	16	\N	t	2023-02-13 14:19:11.803092	\N	\N
430	5	16	\N	t	2023-02-13 14:19:13.046517	\N	\N
431	4	16	\N	t	2023-02-13 14:19:13.98085	\N	\N
432	1	16	\N	t	2023-02-13 14:19:15.106115	\N	\N
433	2	16	\N	t	2023-02-13 14:19:15.877054	\N	\N
434	3	16	\N	t	2023-02-13 14:19:16.649818	\N	\N
435	47	17	\N	t	2023-02-13 14:19:49.139673	\N	\N
436	46	17	\N	t	2023-02-13 14:19:50.102319	\N	\N
437	45	17	\N	t	2023-02-13 14:19:50.836944	\N	\N
438	44	17	\N	t	2023-02-13 14:19:51.643865	\N	\N
439	40	17	\N	t	2023-02-13 14:19:53.118553	\N	\N
440	41	17	\N	t	2023-02-13 14:19:54.003087	\N	\N
441	42	17	\N	t	2023-02-13 14:19:54.625778	\N	\N
442	43	17	\N	t	2023-02-13 14:19:55.325705	\N	\N
443	39	17	\N	t	2023-02-13 14:19:56.656004	\N	\N
444	37	17	\N	t	2023-02-13 14:19:57.338464	\N	\N
445	38	17	\N	t	2023-02-13 14:19:58.120984	\N	\N
446	36	17	\N	t	2023-02-13 14:19:58.854923	\N	\N
447	32	17	\N	t	2023-02-13 14:20:00.107105	\N	\N
448	34	17	\N	t	2023-02-13 14:20:00.930652	\N	\N
449	33	17	\N	t	2023-02-13 14:20:01.606098	\N	\N
450	35	17	\N	t	2023-02-13 14:20:02.43077	\N	\N
451	30	17	\N	t	2023-02-13 14:20:05.378734	\N	\N
452	29	17	\N	t	2023-02-13 14:20:06.156451	\N	\N
453	31	17	\N	t	2023-02-13 14:20:06.973364	\N	\N
454	28	17	\N	t	2023-02-13 14:20:07.681189	\N	\N
455	24	17	\N	t	2023-02-13 14:20:13.669634	\N	\N
456	25	17	\N	t	2023-02-13 14:20:14.855008	\N	\N
457	26	17	\N	t	2023-02-13 14:20:15.887409	\N	\N
458	27	17	\N	t	2023-02-13 14:20:16.660248	\N	\N
459	23	17	\N	t	2023-02-13 14:20:27.595692	\N	\N
460	22	17	\N	t	2023-02-13 14:20:28.749487	\N	\N
461	21	17	\N	t	2023-02-13 14:20:29.543705	\N	\N
462	20	17	\N	t	2023-02-13 14:20:31.385594	\N	\N
463	16	17	\N	t	2023-02-13 14:20:32.779572	\N	\N
464	17	17	\N	t	2023-02-13 14:20:33.377221	\N	\N
465	18	17	\N	t	2023-02-13 14:20:34.001281	\N	\N
466	19	17	\N	t	2023-02-13 14:20:35.103495	\N	\N
467	15	17	\N	t	2023-02-13 14:20:36.170064	\N	\N
468	14	17	\N	t	2023-02-13 14:20:37.140593	\N	\N
469	13	17	\N	t	2023-02-13 14:20:38.05265	\N	\N
470	12	17	\N	t	2023-02-13 14:20:38.842978	\N	\N
471	8	17	\N	t	2023-02-13 14:20:40.154822	\N	\N
472	9	17	\N	t	2023-02-13 14:20:40.728902	\N	\N
473	10	17	\N	t	2023-02-13 14:20:41.679834	\N	\N
474	11	17	\N	t	2023-02-13 14:20:42.729952	\N	\N
475	7	17	\N	t	2023-02-13 14:20:43.902517	\N	\N
476	6	17	\N	t	2023-02-13 14:20:44.85859	\N	\N
477	5	17	\N	t	2023-02-13 14:20:45.267003	\N	\N
478	4	17	\N	t	2023-02-13 14:20:46.116454	\N	\N
479	1	17	\N	t	2023-02-13 14:20:47.798899	\N	\N
480	2	17	\N	t	2023-02-13 14:20:48.733932	\N	\N
481	3	17	\N	t	2023-02-13 14:20:49.849932	\N	\N
482	47	18	\N	t	2023-02-13 14:21:12.794836	\N	\N
483	46	18	\N	t	2023-02-13 14:21:13.525191	\N	\N
484	45	18	\N	t	2023-02-13 14:21:14.314585	\N	\N
485	44	18	\N	t	2023-02-13 14:21:14.995337	\N	\N
486	40	18	\N	t	2023-02-13 14:21:17.042162	\N	\N
487	41	18	\N	t	2023-02-13 14:21:18.005744	\N	\N
488	42	18	\N	t	2023-02-13 14:21:18.556124	\N	\N
489	43	18	\N	t	2023-02-13 14:21:19.224731	\N	\N
490	39	18	\N	t	2023-02-13 14:21:20.095453	\N	\N
491	37	18	\N	t	2023-02-13 14:21:20.930554	\N	\N
492	38	18	\N	t	2023-02-13 14:21:21.671856	\N	\N
493	36	18	\N	t	2023-02-13 14:21:22.371386	\N	\N
494	32	18	\N	t	2023-02-13 14:21:23.792585	\N	\N
495	34	18	\N	t	2023-02-13 14:21:24.801339	\N	\N
496	33	18	\N	t	2023-02-13 14:21:25.593992	\N	\N
497	35	18	\N	t	2023-02-13 14:21:26.242567	\N	\N
498	30	18	\N	t	2023-02-13 14:21:27.46487	\N	\N
499	29	18	\N	t	2023-02-13 14:21:28.050596	\N	\N
500	31	18	\N	t	2023-02-13 14:21:28.830695	\N	\N
501	28	18	\N	t	2023-02-13 14:21:29.544224	\N	\N
502	27	18	\N	t	2023-02-13 14:21:34.099826	\N	\N
503	26	18	\N	t	2023-02-13 14:21:34.760839	\N	\N
504	25	18	\N	t	2023-02-13 14:21:35.888588	\N	\N
505	24	18	\N	t	2023-02-13 14:21:36.893542	\N	\N
506	20	18	\N	t	2023-02-13 14:21:38.296874	\N	\N
507	21	18	\N	t	2023-02-13 14:21:39.076558	\N	\N
508	22	18	\N	t	2023-02-13 14:21:39.737849	\N	\N
509	23	18	\N	t	2023-02-13 14:21:41.69366	\N	\N
510	19	18	\N	t	2023-02-13 14:21:42.845366	\N	\N
511	18	18	\N	t	2023-02-13 14:21:43.641055	\N	\N
512	17	18	\N	t	2023-02-13 14:21:44.192048	\N	\N
513	16	18	\N	t	2023-02-13 14:21:44.867017	\N	\N
514	12	18	\N	t	2023-02-13 14:21:46.155319	\N	\N
515	13	18	\N	t	2023-02-13 14:21:47.010877	\N	\N
516	14	18	\N	t	2023-02-13 14:21:47.850356	\N	\N
517	15	18	\N	t	2023-02-13 14:21:48.47631	\N	\N
518	11	18	\N	t	2023-02-13 14:21:49.693142	\N	\N
519	10	18	\N	t	2023-02-13 14:21:50.60752	\N	\N
520	9	18	\N	t	2023-02-13 14:21:51.181693	\N	\N
521	8	18	\N	t	2023-02-13 14:21:51.874912	\N	\N
522	4	18	\N	t	2023-02-13 14:21:53.387083	\N	\N
523	5	18	\N	t	2023-02-13 14:21:53.772472	\N	\N
524	6	18	\N	t	2023-02-13 14:21:54.630685	\N	\N
525	7	18	\N	t	2023-02-13 14:21:55.446152	\N	\N
526	3	18	\N	t	2023-02-13 14:21:56.609934	\N	\N
527	2	18	\N	t	2023-02-13 14:21:58.015158	\N	\N
528	1	18	\N	t	2023-02-13 14:21:59.091087	\N	\N
529	47	19	\N	t	2023-02-13 14:22:24.763885	\N	\N
530	46	19	\N	t	2023-02-13 14:22:25.480796	\N	\N
531	45	19	\N	t	2023-02-13 14:22:26.200604	\N	\N
532	44	19	\N	t	2023-02-13 14:22:26.955803	\N	\N
533	40	19	\N	t	2023-02-13 14:22:28.057904	\N	\N
534	41	19	\N	t	2023-02-13 14:22:28.806835	\N	\N
535	42	19	\N	t	2023-02-13 14:22:29.51586	\N	\N
536	43	19	\N	t	2023-02-13 14:22:30.244203	\N	\N
537	39	19	\N	t	2023-02-13 14:22:31.425428	\N	\N
538	37	19	\N	t	2023-02-13 14:22:32.377639	\N	\N
539	38	19	\N	t	2023-02-13 14:22:33.085094	\N	\N
540	36	19	\N	t	2023-02-13 14:22:33.685147	\N	\N
541	32	19	\N	t	2023-02-13 14:22:34.807538	\N	\N
542	34	19	\N	t	2023-02-13 14:22:35.676963	\N	\N
543	33	19	\N	t	2023-02-13 14:22:36.45007	\N	\N
544	35	19	\N	t	2023-02-13 14:22:37.577133	\N	\N
545	30	19	\N	t	2023-02-13 14:22:38.640308	\N	\N
546	29	19	\N	t	2023-02-13 14:22:39.420537	\N	\N
547	31	19	\N	t	2023-02-13 14:22:39.997534	\N	\N
548	28	19	\N	t	2023-02-13 14:22:40.718103	\N	\N
549	24	19	\N	t	2023-02-13 14:22:44.575336	\N	\N
550	25	19	\N	t	2023-02-13 14:22:45.228474	\N	\N
551	26	19	\N	t	2023-02-13 14:22:46.020444	\N	\N
552	27	19	\N	t	2023-02-13 14:22:46.946539	\N	\N
553	23	19	\N	t	2023-02-13 14:23:01.698752	\N	\N
554	22	19	\N	t	2023-02-13 14:23:02.449808	\N	\N
555	21	19	\N	t	2023-02-13 14:23:02.982548	\N	\N
556	20	19	\N	t	2023-02-13 14:23:03.628147	\N	\N
557	16	19	\N	t	2023-02-13 14:23:04.838696	\N	\N
558	17	19	\N	t	2023-02-13 14:23:05.617676	\N	\N
559	18	19	\N	t	2023-02-13 14:23:06.418803	\N	\N
560	19	19	\N	t	2023-02-13 14:23:07.128227	\N	\N
561	15	19	\N	t	2023-02-13 14:23:08.249331	\N	\N
562	14	19	\N	t	2023-02-13 14:23:08.981097	\N	\N
563	13	19	\N	t	2023-02-13 14:23:09.734192	\N	\N
564	12	19	\N	t	2023-02-13 14:23:10.246558	\N	\N
565	8	19	\N	t	2023-02-13 14:23:11.547425	\N	\N
566	9	19	\N	t	2023-02-13 14:23:12.384249	\N	\N
567	10	19	\N	t	2023-02-13 14:23:13.16472	\N	\N
568	11	19	\N	t	2023-02-13 14:23:13.717859	\N	\N
569	7	19	\N	t	2023-02-13 14:23:14.849414	\N	\N
570	6	19	\N	t	2023-02-13 14:23:15.487609	\N	\N
571	5	19	\N	t	2023-02-13 14:23:16.234991	\N	\N
572	4	19	\N	t	2023-02-13 14:23:16.680066	\N	\N
573	1	19	\N	t	2023-02-13 14:23:17.740784	\N	\N
574	2	19	\N	t	2023-02-13 14:23:18.488914	\N	\N
575	3	19	\N	t	2023-02-13 14:23:19.208056	\N	\N
576	33	21	\N	t	2023-02-13 14:23:44.8788	\N	\N
577	2	21	\N	t	2023-02-13 14:23:45.490307	\N	\N
578	3	21	\N	t	2023-02-13 14:23:46.229609	\N	\N
579	5	21	\N	t	2023-02-13 14:23:46.846447	\N	\N
580	11	21	\N	t	2023-02-13 14:23:48.444743	\N	\N
581	15	21	\N	t	2023-02-13 14:23:49.192978	\N	\N
582	6	21	\N	t	2023-02-13 14:23:49.884657	\N	\N
583	7	21	\N	t	2023-02-13 14:23:50.551623	\N	\N
584	17	21	\N	t	2023-02-13 14:23:51.864715	\N	\N
585	16	21	\N	t	2023-02-13 14:23:52.495632	\N	\N
586	19	21	\N	t	2023-02-13 14:23:53.375027	\N	\N
587	18	21	\N	t	2023-02-13 14:23:54.098934	\N	\N
588	21	21	\N	t	2023-02-13 14:23:55.763529	\N	\N
589	22	21	\N	t	2023-02-13 14:23:56.402938	\N	\N
590	20	21	\N	t	2023-02-13 14:23:57.218962	\N	\N
591	23	21	\N	t	2023-02-13 14:23:57.808864	\N	\N
592	25	21	\N	t	2023-02-13 14:23:59.033417	\N	\N
593	24	21	\N	t	2023-02-13 14:23:59.814433	\N	\N
594	28	21	\N	t	2023-02-13 14:24:00.518444	\N	\N
595	27	21	\N	t	2023-02-13 14:24:01.116333	\N	\N
596	30	21	\N	t	2023-02-13 14:24:05.675614	\N	\N
597	29	21	\N	t	2023-02-13 14:24:06.383717	\N	\N
598	37	21	\N	t	2023-02-13 14:24:07.125577	\N	\N
599	32	21	\N	t	2023-02-13 14:24:07.900439	\N	\N
600	1	21	\N	t	2023-02-13 14:24:09.071798	\N	\N
601	13	21	\N	t	2023-02-13 14:24:09.821179	\N	\N
602	43	21	\N	t	2023-02-13 14:24:10.617475	\N	\N
603	10	21	\N	t	2023-02-13 14:24:11.394182	\N	\N
604	8	21	\N	t	2023-02-13 14:24:12.767565	\N	\N
605	14	21	\N	t	2023-02-13 14:24:13.274888	\N	\N
606	26	21	\N	t	2023-02-13 14:24:13.912914	\N	\N
607	9	21	\N	t	2023-02-13 14:24:14.607241	\N	\N
608	4	21	\N	t	2023-02-13 14:24:16.268648	\N	\N
609	34	21	\N	t	2023-02-13 14:24:16.989974	\N	\N
610	31	21	\N	t	2023-02-13 14:24:17.904495	\N	\N
611	45	21	\N	t	2023-02-13 14:24:18.97782	\N	\N
612	35	21	\N	t	2023-02-13 14:24:20.025714	\N	\N
613	12	21	\N	t	2023-02-13 14:24:20.731191	\N	\N
614	47	21	\N	t	2023-02-13 14:24:21.280584	\N	\N
615	39	21	\N	t	2023-02-13 14:24:21.971467	\N	\N
616	42	21	\N	t	2023-02-13 14:24:23.30601	\N	\N
617	38	21	\N	t	2023-02-13 14:24:24.264566	\N	\N
618	46	21	\N	t	2023-02-13 14:24:25.141183	\N	\N
619	44	21	\N	t	2023-02-13 14:24:25.928365	\N	\N
620	33	22	\N	t	2023-02-13 14:25:06.175568	\N	\N
621	2	22	\N	t	2023-02-13 14:25:06.819251	\N	\N
622	3	22	\N	t	2023-02-13 14:25:07.498323	\N	\N
623	5	22	\N	t	2023-02-13 14:25:08.303978	\N	\N
624	11	22	\N	t	2023-02-13 14:25:10.046015	\N	\N
625	15	22	\N	t	2023-02-13 14:25:10.630102	\N	\N
626	6	22	\N	t	2023-02-13 14:25:11.299444	\N	\N
627	7	22	\N	t	2023-02-13 14:25:11.912998	\N	\N
628	17	22	\N	t	2023-02-13 14:25:13.064288	\N	\N
629	16	22	\N	t	2023-02-13 14:25:13.666124	\N	\N
630	19	22	\N	t	2023-02-13 14:25:14.364673	\N	\N
631	18	22	\N	t	2023-02-13 14:25:14.938281	\N	\N
632	21	22	\N	t	2023-02-13 14:25:16.103722	\N	\N
633	22	22	\N	t	2023-02-13 14:25:16.668782	\N	\N
634	20	22	\N	t	2023-02-13 14:25:17.326991	\N	\N
635	23	22	\N	t	2023-02-13 14:25:17.927891	\N	\N
636	25	22	\N	t	2023-02-13 14:25:19.279125	\N	\N
637	24	22	\N	t	2023-02-13 14:25:20.011642	\N	\N
638	28	22	\N	t	2023-02-13 14:25:21.50988	\N	\N
639	27	22	\N	t	2023-02-13 14:25:22.050603	\N	\N
640	32	22	\N	t	2023-02-13 14:25:27.010216	\N	\N
641	37	22	\N	t	2023-02-13 14:25:28.021677	\N	\N
642	29	22	\N	t	2023-02-13 14:25:28.741486	\N	\N
663	33	23	\N	t	2023-02-13 14:26:14.263273	\N	\N
643	30	22	\N	t	2023-02-13 14:25:29.440296	\N	\N
646	10	22	\N	t	2023-02-13 14:25:35.778966	\N	\N
647	13	22	\N	t	2023-02-13 14:25:37.02783	\N	\N
648	43	22	\N	t	2023-02-13 14:25:37.801936	\N	\N
649	1	22	\N	t	2023-02-13 14:25:38.401536	\N	\N
650	9	22	\N	t	2023-02-13 14:25:39.621681	\N	\N
651	26	22	\N	t	2023-02-13 14:25:40.569841	\N	\N
652	14	22	\N	t	2023-02-13 14:25:41.514933	\N	\N
653	8	22	\N	t	2023-02-13 14:25:42.182093	\N	\N
654	45	22	\N	t	2023-02-13 14:25:43.36681	\N	\N
655	31	22	\N	t	2023-02-13 14:25:44.611724	\N	\N
656	34	22	\N	t	2023-02-13 14:25:45.327514	\N	\N
657	4	22	\N	t	2023-02-13 14:25:46.196311	\N	\N
658	39	22	\N	t	2023-02-13 14:25:47.228417	\N	\N
659	47	22	\N	t	2023-02-13 14:25:49.162596	\N	\N
660	12	22	\N	t	2023-02-13 14:25:49.842875	\N	\N
661	35	22	\N	t	2023-02-13 14:25:50.828002	\N	\N
662	44	22	\N	t	2023-02-13 14:25:52.313528	\N	\N
664	2	23	\N	t	2023-02-13 14:26:15.075109	\N	\N
665	3	23	\N	t	2023-02-13 14:26:15.940713	\N	\N
666	5	23	\N	t	2023-02-13 14:26:16.716319	\N	\N
667	7	23	\N	t	2023-02-13 14:26:18.205036	\N	\N
668	6	23	\N	t	2023-02-13 14:26:19.014258	\N	\N
669	15	23	\N	t	2023-02-13 14:26:19.735801	\N	\N
670	11	23	\N	t	2023-02-13 14:26:21.414634	\N	\N
671	18	23	\N	t	2023-02-13 14:26:22.95647	\N	\N
672	19	23	\N	t	2023-02-13 14:26:23.67816	\N	\N
673	16	23	\N	t	2023-02-13 14:26:24.458233	\N	\N
674	17	23	\N	t	2023-02-13 14:26:25.329194	\N	\N
675	23	23	\N	t	2023-02-13 14:26:26.529373	\N	\N
676	20	23	\N	t	2023-02-13 14:26:27.249077	\N	\N
677	22	23	\N	t	2023-02-13 14:26:27.863918	\N	\N
678	21	23	\N	t	2023-02-13 14:26:28.654084	\N	\N
679	27	23	\N	t	2023-02-13 14:26:30.401276	\N	\N
680	28	23	\N	t	2023-02-13 14:26:30.969248	\N	\N
681	24	23	\N	t	2023-02-13 14:26:31.620024	\N	\N
682	25	23	\N	t	2023-02-13 14:26:32.386133	\N	\N
683	30	23	\N	t	2023-02-13 14:26:36.838396	\N	\N
684	29	23	\N	t	2023-02-13 14:26:37.470273	\N	\N
685	37	23	\N	t	2023-02-13 14:26:38.280656	\N	\N
686	32	23	\N	t	2023-02-13 14:26:39.033687	\N	\N
687	1	23	\N	t	2023-02-13 14:26:40.019582	\N	\N
688	13	23	\N	t	2023-02-13 14:26:40.717485	\N	\N
689	43	23	\N	t	2023-02-13 14:26:41.542781	\N	\N
690	10	23	\N	t	2023-02-13 14:26:42.237694	\N	\N
691	8	23	\N	t	2023-02-13 14:26:43.368978	\N	\N
692	14	23	\N	t	2023-02-13 14:26:44.040391	\N	\N
693	26	23	\N	t	2023-02-13 14:26:44.838466	\N	\N
694	9	23	\N	t	2023-02-13 14:26:45.416704	\N	\N
695	4	23	\N	t	2023-02-13 14:26:46.568521	\N	\N
696	34	23	\N	t	2023-02-13 14:26:47.3147	\N	\N
697	31	23	\N	t	2023-02-13 14:26:48.037675	\N	\N
698	45	23	\N	t	2023-02-13 14:26:48.783355	\N	\N
699	1	24	\N	t	2023-02-13 14:27:27.320725	\N	\N
700	6	24	\N	t	2023-02-13 14:27:27.915999	\N	\N
701	10	24	\N	t	2023-02-13 14:27:29.211865	\N	\N
702	13	24	\N	t	2023-02-13 14:27:30.87852	\N	\N
703	17	24	\N	t	2023-02-13 14:27:32.070729	\N	\N
704	18	24	\N	t	2023-02-13 14:27:34.09075	\N	\N
705	14	24	\N	t	2023-02-13 14:27:35.513818	\N	\N
706	9	24	\N	t	2023-02-13 14:27:36.631032	\N	\N
707	5	24	\N	t	2023-02-13 14:27:37.744442	\N	\N
708	2	24	\N	t	2023-02-13 14:27:38.849931	\N	\N
709	47	25	\N	t	2023-02-13 14:27:56.556552	\N	\N
710	46	25	\N	t	2023-02-13 14:27:57.358578	\N	\N
711	43	25	\N	t	2023-02-13 14:27:58.392024	\N	\N
712	42	25	\N	t	2023-02-13 14:27:58.979827	\N	\N
713	39	25	\N	t	2023-02-13 14:28:00.406153	\N	\N
714	37	25	\N	t	2023-02-13 14:28:00.925069	\N	\N
715	35	25	\N	t	2023-02-13 14:28:02.082146	\N	\N
716	33	25	\N	t	2023-02-13 14:28:02.521554	\N	\N
717	30	25	\N	t	2023-02-13 14:28:03.773332	\N	\N
718	29	25	\N	t	2023-02-13 14:28:04.343377	\N	\N
719	27	25	\N	t	2023-02-13 14:28:08.233556	\N	\N
720	26	25	\N	t	2023-02-13 14:28:08.935792	\N	\N
721	23	25	\N	t	2023-02-13 14:28:10.21077	\N	\N
722	22	25	\N	t	2023-02-13 14:28:10.74013	\N	\N
723	19	25	\N	t	2023-02-13 14:28:11.941964	\N	\N
724	18	25	\N	t	2023-02-13 14:28:12.93205	\N	\N
725	15	25	\N	t	2023-02-13 14:28:14.490947	\N	\N
726	14	25	\N	t	2023-02-13 14:28:15.20808	\N	\N
727	11	25	\N	t	2023-02-13 14:28:16.530879	\N	\N
728	10	25	\N	t	2023-02-13 14:28:17.091082	\N	\N
729	7	25	\N	t	2023-02-13 14:28:18.167124	\N	\N
730	6	25	\N	t	2023-02-13 14:28:18.949929	\N	\N
731	3	25	\N	t	2023-02-13 14:28:19.957601	\N	\N
732	2	25	\N	t	2023-02-13 14:28:20.559389	\N	\N
733	47	26	\N	t	2023-02-13 14:28:41.426626	\N	\N
734	46	26	\N	t	2023-02-13 14:28:42.076022	\N	\N
735	43	26	\N	t	2023-02-13 14:28:43.284811	\N	\N
736	42	26	\N	t	2023-02-13 14:28:43.951212	\N	\N
737	39	26	\N	t	2023-02-13 14:28:45.007497	\N	\N
738	37	26	\N	t	2023-02-13 14:28:45.701463	\N	\N
739	35	26	\N	t	2023-02-13 14:28:46.713899	\N	\N
740	33	26	\N	t	2023-02-13 14:28:47.22992	\N	\N
741	30	26	\N	t	2023-02-13 14:28:48.264543	\N	\N
742	29	26	\N	t	2023-02-13 14:28:48.802272	\N	\N
743	27	26	\N	t	2023-02-13 14:28:52.821747	\N	\N
744	26	26	\N	t	2023-02-13 14:28:53.438114	\N	\N
745	23	26	\N	t	2023-02-13 14:28:54.940133	\N	\N
746	22	26	\N	t	2023-02-13 14:28:55.547427	\N	\N
747	19	26	\N	t	2023-02-13 14:28:56.877539	\N	\N
748	18	26	\N	t	2023-02-13 14:28:57.398954	\N	\N
749	15	26	\N	t	2023-02-13 14:28:58.153529	\N	\N
750	14	26	\N	t	2023-02-13 14:28:58.794598	\N	\N
751	11	26	\N	t	2023-02-13 14:29:00.355209	\N	\N
752	10	26	\N	t	2023-02-13 14:29:00.918018	\N	\N
753	7	26	\N	t	2023-02-13 14:29:01.97649	\N	\N
754	6	26	\N	t	2023-02-13 14:29:02.673013	\N	\N
755	3	26	\N	t	2023-02-13 14:29:04.091201	\N	\N
756	2	26	\N	t	2023-02-13 14:29:04.9548	\N	\N
757	47	27	\N	t	2023-02-13 14:29:27.835087	\N	\N
758	46	27	\N	t	2023-02-13 14:29:28.411675	\N	\N
759	43	27	\N	t	2023-02-13 14:29:29.807229	\N	\N
760	42	27	\N	t	2023-02-13 14:29:30.398156	\N	\N
761	39	27	\N	t	2023-02-13 14:29:31.268541	\N	\N
762	37	27	\N	t	2023-02-13 14:29:31.809737	\N	\N
763	35	27	\N	t	2023-02-13 14:29:33.421879	\N	\N
764	33	27	\N	t	2023-02-13 14:29:34.16058	\N	\N
765	30	27	\N	t	2023-02-13 14:29:35.511191	\N	\N
766	29	27	\N	t	2023-02-13 14:29:36.460478	\N	\N
767	27	27	\N	t	2023-02-13 14:29:40.39084	\N	\N
768	26	27	\N	t	2023-02-13 14:29:41.213759	\N	\N
769	23	27	\N	t	2023-02-13 14:29:42.175946	\N	\N
770	22	27	\N	t	2023-02-13 14:29:42.914206	\N	\N
771	19	27	\N	t	2023-02-13 14:29:44.46914	\N	\N
772	18	27	\N	t	2023-02-13 14:29:45.02869	\N	\N
773	15	27	\N	t	2023-02-13 14:29:46.46617	\N	\N
774	14	27	\N	t	2023-02-13 14:29:47.139581	\N	\N
775	11	27	\N	t	2023-02-13 14:29:48.535143	\N	\N
776	10	27	\N	t	2023-02-13 14:29:49.259172	\N	\N
777	7	27	\N	t	2023-02-13 14:29:49.965479	\N	\N
778	6	27	\N	t	2023-02-13 14:29:50.627204	\N	\N
779	3	27	\N	t	2023-02-13 14:29:52.832418	\N	\N
780	2	27	\N	t	2023-02-13 14:29:53.452297	\N	\N
781	47	28	\N	t	2023-02-13 14:30:13.821178	\N	\N
782	46	28	\N	t	2023-02-13 14:30:14.507687	\N	\N
783	43	28	\N	t	2023-02-13 14:30:15.369957	\N	\N
784	42	28	\N	t	2023-02-13 14:30:16.199477	\N	\N
785	39	28	\N	t	2023-02-13 14:30:17.35583	\N	\N
786	37	28	\N	t	2023-02-13 14:30:18.062225	\N	\N
787	35	28	\N	t	2023-02-13 14:30:19.278476	\N	\N
788	33	28	\N	t	2023-02-13 14:30:19.98161	\N	\N
789	34	28	\N	t	2023-02-13 14:30:20.92079	\N	\N
790	30	28	\N	t	2023-02-13 14:30:22.203946	\N	\N
791	29	28	\N	t	2023-02-13 14:30:22.8166	\N	\N
792	31	28	\N	t	2023-02-13 14:30:23.490607	\N	\N
793	27	28	\N	t	2023-02-13 14:30:27.61155	\N	\N
794	26	28	\N	t	2023-02-13 14:30:28.194918	\N	\N
795	25	28	\N	t	2023-02-13 14:30:28.778643	\N	\N
796	23	28	\N	t	2023-02-13 14:30:29.956486	\N	\N
797	22	28	\N	t	2023-02-13 14:30:30.526017	\N	\N
798	21	28	\N	t	2023-02-13 14:30:31.09528	\N	\N
799	19	28	\N	t	2023-02-13 14:30:32.184974	\N	\N
800	18	28	\N	t	2023-02-13 14:30:32.891264	\N	\N
801	17	28	\N	t	2023-02-13 14:30:33.887972	\N	\N
802	15	28	\N	t	2023-02-13 14:30:34.8596	\N	\N
803	14	28	\N	t	2023-02-13 14:30:35.408249	\N	\N
804	13	28	\N	t	2023-02-13 14:30:36.313292	\N	\N
805	11	28	\N	t	2023-02-13 14:30:37.231569	\N	\N
806	10	28	\N	t	2023-02-13 14:30:37.877194	\N	\N
807	9	28	\N	t	2023-02-13 14:30:38.494399	\N	\N
808	7	28	\N	t	2023-02-13 14:30:39.691813	\N	\N
809	6	28	\N	t	2023-02-13 14:30:40.395611	\N	\N
810	5	28	\N	t	2023-02-13 14:30:41.034887	\N	\N
811	3	28	\N	t	2023-02-13 14:30:42.645155	\N	\N
812	2	28	\N	t	2023-02-13 14:30:43.389026	\N	\N
813	1	28	\N	t	2023-02-13 14:30:44.764713	\N	\N
814	47	29	\N	t	2023-02-13 14:31:03.504406	\N	\N
815	46	29	\N	t	2023-02-13 14:31:04.216353	\N	\N
816	45	29	\N	t	2023-02-13 14:31:04.900039	\N	\N
817	43	29	\N	t	2023-02-13 14:31:05.656501	\N	\N
818	42	29	\N	t	2023-02-13 14:31:06.399471	\N	\N
819	41	29	\N	t	2023-02-13 14:31:06.931883	\N	\N
820	39	29	\N	t	2023-02-13 14:31:08.359123	\N	\N
821	37	29	\N	t	2023-02-13 14:31:09.724678	\N	\N
822	38	29	\N	t	2023-02-13 14:31:10.892174	\N	\N
823	35	29	\N	t	2023-02-13 14:31:12.284486	\N	\N
824	33	29	\N	t	2023-02-13 14:31:13.593757	\N	\N
825	30	29	\N	t	2023-02-13 14:31:14.567934	\N	\N
826	29	29	\N	t	2023-02-13 14:31:15.282713	\N	\N
827	27	29	\N	t	2023-02-13 14:31:22.609749	\N	\N
828	26	29	\N	t	2023-02-13 14:31:23.1151	\N	\N
829	23	29	\N	t	2023-02-13 14:31:23.943164	\N	\N
830	22	29	\N	t	2023-02-13 14:31:24.788381	\N	\N
831	19	29	\N	t	2023-02-13 14:31:26.071349	\N	\N
832	18	29	\N	t	2023-02-13 14:31:26.723738	\N	\N
833	17	29	\N	t	2023-02-13 14:31:27.465343	\N	\N
834	15	29	\N	t	2023-02-13 14:31:28.802269	\N	\N
835	14	29	\N	t	2023-02-13 14:31:29.51592	\N	\N
836	11	29	\N	t	2023-02-13 14:31:30.911014	\N	\N
837	10	29	\N	t	2023-02-13 14:31:31.403505	\N	\N
838	7	29	\N	t	2023-02-13 14:31:32.657228	\N	\N
839	6	29	\N	t	2023-02-13 14:31:33.330704	\N	\N
840	5	29	\N	t	2023-02-13 14:31:34.051924	\N	\N
841	3	29	\N	t	2023-02-13 14:31:35.251681	\N	\N
842	2	29	\N	t	2023-02-13 14:31:35.943013	\N	\N
843	1	29	\N	t	2023-02-13 14:31:36.737556	\N	\N
844	47	30	\N	t	2023-02-13 14:31:56.35337	\N	\N
845	46	30	\N	t	2023-02-13 14:31:57.00355	\N	\N
846	45	30	\N	t	2023-02-13 14:31:57.715712	\N	\N
847	43	30	\N	t	2023-02-13 14:31:58.923121	\N	\N
848	42	30	\N	t	2023-02-13 14:31:59.727269	\N	\N
849	41	30	\N	t	2023-02-13 14:32:00.667362	\N	\N
850	39	30	\N	t	2023-02-13 14:32:01.999706	\N	\N
851	37	30	\N	t	2023-02-13 14:32:02.760512	\N	\N
852	35	30	\N	t	2023-02-13 14:32:03.92472	\N	\N
853	33	30	\N	t	2023-02-13 14:32:04.62188	\N	\N
854	30	30	\N	t	2023-02-13 14:32:05.895672	\N	\N
855	29	30	\N	t	2023-02-13 14:32:06.50224	\N	\N
856	31	30	\N	t	2023-02-13 14:32:07.495313	\N	\N
857	27	30	\N	t	2023-02-13 14:32:11.13266	\N	\N
858	26	30	\N	t	2023-02-13 14:32:11.78744	\N	\N
859	25	30	\N	t	2023-02-13 14:32:12.627584	\N	\N
860	23	30	\N	t	2023-02-13 14:32:13.466471	\N	\N
861	22	30	\N	t	2023-02-13 14:32:14.155731	\N	\N
862	21	30	\N	t	2023-02-13 14:32:14.865922	\N	\N
863	19	30	\N	t	2023-02-13 14:32:17.048904	\N	\N
864	18	30	\N	t	2023-02-13 14:32:17.619324	\N	\N
865	15	30	\N	t	2023-02-13 14:32:18.875086	\N	\N
866	14	30	\N	t	2023-02-13 14:32:19.608606	\N	\N
867	11	30	\N	t	2023-02-13 14:32:20.822795	\N	\N
868	10	30	\N	t	2023-02-13 14:32:21.407104	\N	\N
869	7	30	\N	t	2023-02-13 14:32:22.774704	\N	\N
870	6	30	\N	t	2023-02-13 14:32:23.447175	\N	\N
871	3	30	\N	t	2023-02-13 14:32:24.618525	\N	\N
872	2	30	\N	t	2023-02-13 14:32:25.253564	\N	\N
873	47	31	\N	t	2023-02-13 14:32:47.262107	\N	\N
874	46	31	\N	t	2023-02-13 14:32:48.002459	\N	\N
875	43	31	\N	t	2023-02-13 14:32:49.201808	\N	\N
876	41	31	\N	f	2023-02-13 14:32:49.886873	\N	\N
878	42	31	\N	t	2023-02-13 14:32:51.115241	\N	\N
879	39	31	\N	t	2023-02-13 14:32:54.155378	\N	\N
880	37	31	\N	t	2023-02-13 14:32:54.759921	\N	\N
881	35	31	\N	t	2023-02-13 14:32:55.797177	\N	\N
882	33	31	\N	t	2023-02-13 14:32:56.437992	\N	\N
883	30	31	\N	t	2023-02-13 14:32:58.066782	\N	\N
884	29	31	\N	t	2023-02-13 14:32:58.752246	\N	\N
885	27	31	\N	t	2023-02-13 14:33:03.387128	\N	\N
886	25	31	\N	t	2023-02-13 14:33:04.234577	\N	\N
887	23	31	\N	t	2023-02-13 14:33:05.492085	\N	\N
888	21	31	\N	t	2023-02-13 14:33:06.182989	\N	\N
889	19	31	\N	t	2023-02-13 14:33:07.489818	\N	\N
890	18	31	\N	t	2023-02-13 14:33:08.890921	\N	\N
891	22	31	\N	t	2023-02-13 14:33:10.401442	\N	\N
892	14	31	\N	t	2023-02-13 14:33:12.632891	\N	\N
893	11	31	\N	t	2023-02-13 14:33:14.000733	\N	\N
894	10	31	\N	t	2023-02-13 14:33:15.712747	\N	\N
895	6	31	\N	t	2023-02-13 14:33:16.962372	\N	\N
896	2	31	\N	t	2023-02-13 14:33:18.754089	\N	\N
897	47	32	\N	t	2023-02-13 14:33:39.6896	\N	\N
898	46	32	\N	t	2023-02-13 14:33:40.236628	\N	\N
899	42	32	\N	t	2023-02-13 14:33:41.40308	\N	\N
900	43	32	\N	t	2023-02-13 14:33:41.98742	\N	\N
901	39	32	\N	t	2023-02-13 14:33:43.067349	\N	\N
902	37	32	\N	t	2023-02-13 14:33:44.453906	\N	\N
903	33	32	\N	t	2023-02-13 14:33:45.980146	\N	\N
904	35	32	\N	t	2023-02-13 14:33:46.936445	\N	\N
905	30	32	\N	t	2023-02-13 14:33:47.896514	\N	\N
906	29	32	\N	t	2023-02-13 14:33:48.498067	\N	\N
907	27	32	\N	t	2023-02-13 14:33:52.169303	\N	\N
908	26	32	\N	t	2023-02-13 14:33:52.755808	\N	\N
909	22	32	\N	t	2023-02-13 14:33:53.977816	\N	\N
910	23	32	\N	t	2023-02-13 14:33:54.743375	\N	\N
911	19	32	\N	t	2023-02-13 14:33:55.92945	\N	\N
912	18	32	\N	t	2023-02-13 14:33:57.396447	\N	\N
913	14	32	\N	t	2023-02-13 14:33:58.779805	\N	\N
914	15	32	\N	t	2023-02-13 14:33:59.344076	\N	\N
915	11	32	\N	t	2023-02-13 14:34:00.534832	\N	\N
916	10	32	\N	t	2023-02-13 14:34:01.341279	\N	\N
917	6	32	\N	t	2023-02-13 14:34:02.362636	\N	\N
918	7	32	\N	t	2023-02-13 14:34:02.988509	\N	\N
919	3	32	\N	t	2023-02-13 14:34:04.11119	\N	\N
920	2	32	\N	t	2023-02-13 14:34:04.761312	\N	\N
921	1	32	\N	t	2023-02-13 14:34:05.875337	\N	\N
922	1	33	\N	t	2023-02-13 14:34:36.364619	\N	\N
923	2	33	\N	t	2023-02-13 14:34:37.188663	\N	\N
924	3	33	\N	t	2023-02-13 14:34:37.665664	\N	\N
925	6	33	\N	t	2023-02-13 14:34:39.3663	\N	\N
926	8	33	\N	t	2023-02-13 14:34:40.53857	\N	\N
927	7	33	\N	t	2023-02-13 14:34:41.161933	\N	\N
928	10	33	\N	t	2023-02-13 14:34:42.354289	\N	\N
929	12	33	\N	t	2023-02-13 14:34:43.523076	\N	\N
930	11	33	\N	t	2023-02-13 14:34:44.176414	\N	\N
931	13	33	\N	t	2023-02-13 14:34:45.421503	\N	\N
932	14	33	\N	t	2023-02-13 14:34:46.157514	\N	\N
933	16	33	\N	t	2023-02-13 14:34:46.787453	\N	\N
934	15	33	\N	t	2023-02-13 14:34:47.56225	\N	\N
935	18	33	\N	t	2023-02-13 14:34:49.546085	\N	\N
936	20	33	\N	t	2023-02-13 14:34:50.309139	\N	\N
937	19	33	\N	t	2023-02-13 14:34:50.894297	\N	\N
938	23	33	\N	t	2023-02-13 14:34:56.39185	\N	\N
939	22	33	\N	t	2023-02-13 14:34:57.489054	\N	\N
940	24	33	\N	t	2023-02-13 14:34:59.285164	\N	\N
941	25	33	\N	t	2023-02-13 14:35:00.587758	\N	\N
942	26	33	\N	t	2023-02-13 14:35:01.202298	\N	\N
943	27	33	\N	t	2023-02-13 14:35:01.888044	\N	\N
944	29	33	\N	t	2023-02-13 14:35:03.970668	\N	\N
945	30	33	\N	t	2023-02-13 14:35:04.703798	\N	\N
946	31	33	\N	t	2023-02-13 14:35:05.685384	\N	\N
947	33	33	\N	t	2023-02-13 14:35:07.316666	\N	\N
948	37	33	\N	t	2023-02-13 14:35:12.158806	\N	\N
949	41	33	\N	f	2023-02-13 14:35:14.694026	\N	\N
951	2	34	\N	t	2023-02-13 14:35:49.558141	\N	\N
952	6	34	\N	t	2023-02-13 14:35:50.333418	\N	\N
953	18	34	\N	t	2023-02-13 14:35:51.040068	\N	\N
954	14	34	\N	t	2023-02-13 14:35:52.726855	\N	\N
955	10	34	\N	t	2023-02-13 14:35:54.176426	\N	\N
956	19	34	\N	t	2023-02-13 14:35:55.399547	\N	\N
957	22	34	\N	t	2023-02-13 14:35:56.252094	\N	\N
958	23	34	\N	t	2023-02-13 14:35:59.889697	\N	\N
959	27	34	\N	t	2023-02-13 14:36:00.647398	\N	\N
960	29	34	\N	t	2023-02-13 14:36:01.312295	\N	\N
961	30	34	\N	t	2023-02-13 14:36:02.048867	\N	\N
962	33	34	\N	t	2023-02-13 14:36:03.781576	\N	\N
963	37	34	\N	t	2023-02-13 14:36:04.39573	\N	\N
964	43	34	\N	t	2023-02-13 14:36:05.51436	\N	\N
965	3	34	\N	t	2023-02-13 14:36:07.411785	\N	\N
966	26	34	\N	t	2023-02-13 14:36:08.377939	\N	\N
967	7	34	\N	t	2023-02-13 14:36:09.0923	\N	\N
968	1	34	\N	t	2023-02-13 14:36:09.803881	\N	\N
969	39	34	\N	t	2023-02-13 14:36:14.677955	\N	\N
970	47	34	\N	t	2023-02-13 14:36:15.31974	\N	\N
971	25	34	\N	t	2023-02-13 14:36:19.869778	\N	\N
972	42	34	\N	f	2023-02-13 14:36:20.527921	\N	\N
974	13	34	\N	t	2023-02-13 14:36:25.017341	\N	\N
975	21	34	\N	t	2023-02-13 14:36:26.168459	\N	\N
976	47	35	\N	t	2023-02-13 14:36:45.882497	\N	\N
977	2	35	\N	t	2023-02-13 14:36:52.347697	\N	\N
978	14	35	\N	t	2023-02-13 14:36:52.973552	\N	\N
979	18	35	\N	t	2023-02-13 14:36:53.669336	\N	\N
980	6	35	\N	t	2023-02-13 14:36:54.28776	\N	\N
981	10	35	\N	t	2023-02-13 14:36:55.089941	\N	\N
982	27	35	\N	t	2023-02-13 14:36:55.699284	\N	\N
983	22	35	\N	t	2023-02-13 14:36:56.531151	\N	\N
984	30	35	\N	t	2023-02-13 14:36:57.128727	\N	\N
985	29	35	\N	t	2023-02-13 14:36:58.588394	\N	\N
986	23	35	\N	t	2023-02-13 14:36:59.220076	\N	\N
987	37	35	\N	t	2023-02-13 14:37:00.885813	\N	\N
988	19	35	\N	t	2023-02-13 14:37:01.668489	\N	\N
989	33	35	\N	t	2023-02-13 14:37:03.255104	\N	\N
990	7	35	\N	t	2023-02-13 14:37:04.945583	\N	\N
991	3	35	\N	t	2023-02-13 14:37:05.625079	\N	\N
992	11	35	\N	t	2023-02-13 14:37:07.666799	\N	\N
993	26	35	\N	t	2023-02-13 14:37:08.411898	\N	\N
994	39	35	\N	t	2023-02-13 14:37:08.926969	\N	\N
995	43	35	\N	t	2023-02-13 14:37:09.570861	\N	\N
996	1	35	\N	t	2023-02-13 14:37:14.047434	\N	\N
997	15	35	\N	t	2023-02-13 14:37:15.144506	\N	\N
998	46	35	\N	t	2023-02-13 14:37:15.467643	\N	\N
999	35	35	\N	t	2023-02-13 14:37:16.16939	\N	\N
1000	13	35	\N	t	2023-02-13 14:37:16.958433	\N	\N
1001	21	35	\N	t	2023-02-13 14:37:17.699447	\N	\N
1002	25	35	\N	t	2023-02-13 14:37:18.504657	\N	\N
1003	42	35	\N	t	2023-02-13 14:37:19.032103	\N	\N
1004	5	35	\N	t	2023-02-13 14:37:20.635685	\N	\N
1005	17	35	\N	t	2023-02-13 14:37:21.271409	\N	\N
1006	9	35	\N	t	2023-02-13 14:37:22.551161	\N	\N
1007	31	35	\N	t	2023-02-13 14:37:23.305302	\N	\N
1008	45	35	\N	t	2023-02-13 14:37:25.321815	\N	\N
1009	16	35	\N	t	2023-02-13 14:37:25.769071	\N	\N
1010	2	36	\N	t	2023-02-13 14:37:51.397226	\N	\N
1011	14	36	\N	t	2023-02-13 14:37:52.269356	\N	\N
1012	6	36	\N	t	2023-02-13 14:37:53.057746	\N	\N
1013	10	36	\N	t	2023-02-13 14:37:54.482261	\N	\N
1014	23	36	\N	t	2023-02-13 14:37:55.046575	\N	\N
1015	19	36	\N	t	2023-02-13 14:37:55.675327	\N	\N
1016	30	36	\N	t	2023-02-13 14:37:56.470333	\N	\N
1017	29	36	\N	t	2023-02-13 14:37:58.16953	\N	\N
1018	22	36	\N	t	2023-02-13 14:37:58.696042	\N	\N
1019	27	36	\N	t	2023-02-13 14:37:59.491086	\N	\N
1020	37	36	\N	t	2023-02-13 14:38:00.239835	\N	\N
1021	33	36	\N	t	2023-02-13 14:38:02.500704	\N	\N
1022	7	36	\N	t	2023-02-13 14:38:03.218379	\N	\N
1023	11	36	\N	t	2023-02-13 14:38:03.978588	\N	\N
1024	3	36	\N	t	2023-02-13 14:38:04.736835	\N	\N
1025	26	36	\N	t	2023-02-13 14:38:05.883215	\N	\N
1026	47	36	\N	t	2023-02-13 14:38:06.444347	\N	\N
1027	43	36	\N	t	2023-02-13 14:38:07.043288	\N	\N
1028	15	36	\N	t	2023-02-13 14:38:07.885695	\N	\N
1029	39	36	\N	t	2023-02-13 14:38:15.112559	\N	\N
1030	42	36	\N	t	2023-02-13 14:38:16.187359	\N	\N
1031	1	36	\N	t	2023-02-13 14:38:17.613572	\N	\N
1033	46	36	\N	t	2023-02-13 14:38:19.359919	\N	\N
1032	35	36	\N	f	2023-02-13 14:38:18.264999	\N	\N
1035	33	37	\N	t	2023-02-13 14:38:50.006269	\N	\N
1036	2	37	\N	t	2023-02-13 14:38:50.912	\N	\N
1037	3	37	\N	t	2023-02-13 14:38:51.566752	\N	\N
1038	5	37	\N	t	2023-02-13 14:38:52.220499	\N	\N
1039	7	37	\N	t	2023-02-13 14:38:53.686413	\N	\N
1040	6	37	\N	t	2023-02-13 14:38:54.838308	\N	\N
1041	15	37	\N	t	2023-02-13 14:38:55.375275	\N	\N
1042	11	37	\N	t	2023-02-13 14:38:56.219327	\N	\N
1043	19	37	\N	t	2023-02-13 14:38:58.7123	\N	\N
1044	16	37	\N	t	2023-02-13 14:39:00.964248	\N	\N
1045	20	37	\N	t	2023-02-13 14:39:01.784865	\N	\N
1046	23	37	\N	t	2023-02-13 14:39:02.326804	\N	\N
1047	21	37	\N	t	2023-02-13 14:39:03.156965	\N	\N
1048	22	37	\N	t	2023-02-13 14:39:03.586689	\N	\N
1049	2	38	\N	t	2023-02-13 14:39:28.034627	\N	\N
1050	6	38	\N	t	2023-02-13 14:39:28.719049	\N	\N
1051	14	38	\N	t	2023-02-13 14:39:29.380255	\N	\N
1052	33	38	\N	t	2023-02-13 14:39:31.1579	\N	\N
1053	23	38	\N	t	2023-02-13 14:39:31.980468	\N	\N
1054	19	38	\N	t	2023-02-13 14:39:32.618867	\N	\N
1055	22	38	\N	t	2023-02-13 14:39:33.783825	\N	\N
1056	10	38	\N	t	2023-02-13 14:39:34.60014	\N	\N
1057	11	38	\N	t	2023-02-13 14:39:36.133413	\N	\N
1058	7	38	\N	t	2023-02-13 14:39:36.716279	\N	\N
1060	3	38	\N	t	2023-02-13 14:39:37.936936	\N	\N
1059	18	38	\N	f	2023-02-13 14:39:37.435865	\N	\N
1062	29	38	\N	t	2023-02-13 14:39:41.498433	\N	\N
1063	37	38	\N	t	2023-02-13 14:39:42.278943	\N	\N
1064	30	38	\N	t	2023-02-13 14:39:42.900011	\N	\N
1065	6	39	\N	t	2023-02-13 14:40:13.367069	\N	\N
1066	14	39	\N	t	2023-02-13 14:40:14.078768	\N	\N
1067	33	39	\N	t	2023-02-13 14:40:14.747614	\N	\N
1068	23	39	\N	t	2023-02-13 14:40:15.955819	\N	\N
1069	19	39	\N	t	2023-02-13 14:40:16.526991	\N	\N
1070	22	39	\N	t	2023-02-13 14:40:17.247323	\N	\N
1071	10	39	\N	t	2023-02-13 14:40:17.843878	\N	\N
1072	11	39	\N	t	2023-02-13 14:40:18.934927	\N	\N
1073	7	39	\N	t	2023-02-13 14:40:19.584793	\N	\N
1074	29	39	\N	t	2023-02-13 14:40:20.23607	\N	\N
1075	3	39	\N	t	2023-02-13 14:40:20.977483	\N	\N
1076	30	39	\N	t	2023-02-13 14:40:22.65255	\N	\N
1077	47	41	\N	t	2023-02-13 14:40:41.842289	\N	\N
1078	46	41	\N	t	2023-02-13 14:40:42.671545	\N	\N
1079	45	41	\N	t	2023-02-13 14:40:43.208805	\N	\N
1080	44	41	\N	t	2023-02-13 14:40:43.958156	\N	\N
1081	43	41	\N	t	2023-02-13 14:40:45.055784	\N	\N
1082	42	41	\N	t	2023-02-13 14:40:45.774916	\N	\N
1083	2	42	\N	t	2023-02-13 14:41:15.788303	\N	\N
1084	6	42	\N	t	2023-02-13 14:41:16.428491	\N	\N
1085	14	42	\N	t	2023-02-13 14:41:17.215437	\N	\N
1086	33	42	\N	t	2023-02-13 14:41:17.755584	\N	\N
1087	23	42	\N	t	2023-02-13 14:41:19.293608	\N	\N
1088	19	42	\N	t	2023-02-13 14:41:19.868051	\N	\N
1089	22	42	\N	t	2023-02-13 14:41:20.636169	\N	\N
1090	10	42	\N	t	2023-02-13 14:41:21.441613	\N	\N
1091	11	42	\N	t	2023-02-13 14:41:22.998216	\N	\N
1092	7	42	\N	t	2023-02-13 14:41:23.754594	\N	\N
1093	29	42	\N	t	2023-02-13 14:41:24.377352	\N	\N
1094	3	42	\N	t	2023-02-13 14:41:24.966292	\N	\N
1095	30	42	\N	t	2023-02-13 14:41:26.656953	\N	\N
1096	37	42	\N	t	2023-02-13 14:41:27.269279	\N	\N
1097	2	43	\N	t	2023-02-13 14:41:52.597926	\N	\N
1098	23	43	\N	t	2023-02-13 14:41:53.559575	\N	\N
1099	6	43	\N	t	2023-02-13 14:41:54.212623	\N	\N
1100	19	43	\N	t	2023-02-13 14:41:55.061482	\N	\N
1101	14	43	\N	t	2023-02-13 14:41:55.863139	\N	\N
1102	22	43	\N	t	2023-02-13 14:41:57.121343	\N	\N
1103	47	44	\N	t	2023-02-13 14:42:14.005753	\N	\N
1104	43	44	\N	t	2023-02-13 14:42:14.59682	\N	\N
1105	46	44	\N	t	2023-02-13 14:42:15.781996	\N	\N
1106	42	44	\N	t	2023-02-13 14:42:16.648184	\N	\N
1107	6	44	\N	t	2023-02-13 14:42:26.011381	\N	\N
1108	2	44	\N	t	2023-02-13 14:42:26.618775	\N	\N
1109	23	44	\N	t	2023-02-13 14:42:27.415129	\N	\N
1110	22	44	\N	t	2023-02-13 14:42:28.242584	\N	\N
1111	10	44	\N	t	2023-02-13 14:42:29.296716	\N	\N
1112	14	44	\N	t	2023-02-13 14:42:30.078219	\N	\N
1113	47	45	\N	t	2023-02-13 14:42:47.507617	\N	\N
1114	46	45	\N	t	2023-02-13 14:42:48.114869	\N	\N
1115	45	45	\N	t	2023-02-13 14:42:48.759644	\N	\N
1116	6	45	\N	t	2023-02-13 14:42:55.69255	\N	\N
1117	2	45	\N	t	2023-02-13 14:42:56.373153	\N	\N
1118	23	45	\N	t	2023-02-13 14:42:56.98967	\N	\N
1119	19	45	\N	t	2023-02-13 14:42:57.743417	\N	\N
1120	14	45	\N	t	2023-02-13 14:42:58.434735	\N	\N
1121	10	45	\N	t	2023-02-13 14:42:59.110546	\N	\N
1122	6	46	\N	t	2023-02-13 14:43:24.628144	\N	\N
1123	2	46	\N	t	2023-02-13 14:43:25.255093	\N	\N
1124	23	46	\N	t	2023-02-13 14:43:25.903562	\N	\N
1125	19	46	\N	t	2023-02-13 14:43:27.35078	\N	\N
1126	22	46	\N	t	2023-02-13 14:43:28.101065	\N	\N
1127	10	46	\N	t	2023-02-13 14:43:28.867618	\N	\N
1128	47	47	\N	t	2023-02-13 14:43:52.884574	\N	\N
1129	46	47	\N	t	2023-02-13 14:43:57.234022	\N	\N
1130	\N	47	\N	t	2023-02-13 14:43:58.221034	\N	\N
1131	2	47	\N	t	2023-02-13 14:44:00.317038	\N	\N
1132	6	47	\N	t	2023-02-13 14:44:01.18545	\N	\N
1133	23	47	\N	t	2023-02-13 14:44:01.814148	\N	\N
1134	22	47	\N	t	2023-02-13 14:44:03.349555	\N	\N
1135	33	47	\N	t	2023-02-13 14:44:04.815633	\N	\N
1136	14	47	\N	t	2023-02-13 14:44:05.411912	\N	\N
1137	19	47	\N	t	2023-02-13 14:44:06.113397	\N	\N
1138	10	47	\N	t	2023-02-13 14:44:06.927003	\N	\N
1139	2	48	\N	t	2023-02-13 14:44:46.355746	\N	\N
1140	22	48	\N	t	2023-02-13 14:44:50.456189	\N	\N
1141	23	48	\N	t	2023-02-13 14:44:51.158184	\N	\N
1142	6	48	\N	t	2023-02-13 14:44:51.828006	\N	\N
1143	6	49	\N	t	2023-02-13 14:45:22.280997	\N	\N
1144	23	49	\N	t	2023-02-13 14:45:23.036438	\N	\N
1145	22	49	\N	t	2023-02-13 14:45:23.755657	\N	\N
1146	14	49	\N	t	2023-02-13 14:45:25.224322	\N	\N
1147	47	50	\N	t	2023-02-13 14:45:48.089901	\N	\N
1148	46	50	\N	t	2023-02-13 14:45:48.946583	\N	\N
1149	45	50	\N	t	2023-02-13 14:45:49.465673	\N	\N
1150	44	50	\N	t	2023-02-13 14:45:50.634993	\N	\N
1151	6	50	\N	t	2023-02-13 14:45:57.11786	\N	\N
1152	23	50	\N	t	2023-02-13 14:45:57.897592	\N	\N
1153	2	50	\N	f	2023-02-13 14:45:58.370485	\N	\N
1155	6	8	\N	t	2023-02-13 14:46:39.141736	\N	\N
1156	23	8	\N	t	2023-02-13 14:46:39.915055	\N	\N
1157	6	9	\N	t	2023-02-13 14:47:08.001299	\N	\N
1158	23	9	\N	t	2023-02-13 14:47:08.940129	\N	\N
144	6	10	\N	t	2023-02-13 14:06:36.947318	\N	\N
1163	\N	25	\N	t	2023-02-13 16:05:23.414189	\N	\N
1164	\N	25	\N	t	2023-02-13 16:05:24.508107	\N	\N
1165	48	25	\N	t	2023-02-13 16:05:29.417625	\N	\N
1166	49	25	\N	f	2023-02-13 16:09:38.144684	\N	\N
1167	\N	25	\N	t	2023-02-13 16:20:53.455137	\N	\N
1168	50	25	\N	t	2023-02-13 16:20:59.007981	\N	\N
1169	51	25	\N	f	2023-02-13 16:43:40.078822	\N	\N
1170	52	25	\N	f	2023-02-13 16:44:19.941794	\N	\N
1171	53	25	\N	f	2023-02-13 16:44:43.989196	\N	\N
1172	54	25	\N	f	2023-02-13 16:45:14.545347	\N	\N
1173	55	25	\N	f	2023-02-13 16:45:54.982341	\N	\N
1174	56	25	\N	f	2023-02-13 16:46:23.043149	\N	\N
1175	57	25	\N	f	2023-02-13 16:46:52.888657	\N	\N
1176	58	25	\N	f	2023-02-13 16:48:03.603981	\N	\N
1177	59	25	\N	f	2023-02-13 16:49:13.830911	\N	\N
1178	60	25	\N	f	2023-02-13 16:49:53.627199	\N	\N
1179	61	25	\N	f	2023-02-13 16:50:16.754735	\N	\N
1180	62	25	\N	f	2023-02-13 16:50:55.959806	\N	\N
1181	63	25	\N	f	2023-02-13 16:51:35.519379	\N	\N
1182	64	2	\N	f	2023-02-13 17:23:21.007944	\N	\N
1183	65	2	\N	f	2023-02-13 17:23:43.924747	\N	\N
1185	66	25	\N	f	2023-02-13 17:52:19.661311	\N	\N
1186	67	25	\N	f	2023-02-13 18:07:52.803071	\N	\N
1187	35	2	\N	f	2023-02-13 18:18:53.913254	\N	\N
\.


--
-- Data for Name: playlists; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.playlists (id, resource_id, profile_id, is_playlist, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	t	2023-02-13 11:50:25.240391	\N	\N
\.


--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.profiles (id, user_id, first_name, last_name, avatar, created_at, updated_at, deleted_at) FROM stdin;
1	1	John	Stewart	https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png	2023-02-13 11:50:25.213517	\N	\N
2	2	George	Michael	https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png	2023-02-13 11:50:25.213517	\N	\N
3	3	Tristan	Jacobs	https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png	2023-02-13 11:50:25.213517	\N	\N
4	4	Jane	Smith	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
5	5	Lucy	Milton	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
6	6	Gloria	Sanders	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
7	7	Roger	Roger	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
8	8	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
9	9	user2	user2	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
10	10	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
11	11	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
12	12	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
13	13	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
14	14	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
15	15	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
16	16	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
17	17	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
18	18	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
19	19	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
20	20	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
21	21	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
22	22	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
23	23	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
24	24	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
25	25	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
26	26	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
27	27	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
28	28	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
29	29	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
30	30	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
31	31	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
32	32	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
33	33	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
34	34	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
35	35	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
36	36	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
37	37	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
38	38	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
39	39	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
40	40	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
41	41	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
42	42	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
43	43	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
44	44	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
45	45	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
46	46	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
47	47	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
48	48	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
49	49	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
50	50	user1	user1	https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png	2023-02-13 11:50:25.213517	\N	\N
\.


--
-- Data for Name: rankings; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.rankings (id, resource_id, profile_id, name, scale, note, created_at, updated_at, deleted_at) FROM stdin;
6	3	1	\N	10	\N	2023-02-13 12:09:06.367881	\N	\N
7	4	1	\N	50	\N	2023-02-13 12:09:36.780099	\N	\N
8	5	1	\N	30	\N	2023-02-13 12:10:03.817857	\N	\N
9	6	1	\N	30	\N	2023-02-13 12:10:29.926772	\N	\N
10	7	1	\N	50	\N	2023-02-13 12:10:54.644432	\N	\N
11	8	1	\N	50	\N	2023-02-13 12:11:21.423233	\N	\N
12	9	1	\N	60	\N	2023-02-13 12:11:49.037606	\N	\N
13	10	1	\N	60	\N	2023-02-13 12:12:18.254862	\N	\N
14	11	1	\N	60	\N	2023-02-13 12:12:46.192823	\N	\N
15	12	1	\N	70	\N	2023-02-13 12:13:16.371902	\N	\N
16	13	1	\N	50	\N	2023-02-13 12:13:38.889838	\N	\N
17	14	1	\N	30	\N	2023-02-13 12:15:43.236776	\N	\N
18	15	1	\N	30	\N	2023-02-13 12:16:04.943389	\N	\N
20	16	1	\N	0	\N	2023-02-13 12:19:01.103901	\N	\N
21	17	1	\N	20	\N	2023-02-13 12:19:38.408619	\N	\N
22	18	1	\N	30	\N	2023-02-13 12:20:12.560057	\N	\N
23	19	1	\N	50	\N	2023-02-13 12:21:14.694699	\N	\N
24	20	1	\N	50	\N	2023-02-13 12:21:42.839201	\N	\N
25	21	1	\N	60	\N	2023-02-13 12:22:24.757951	\N	\N
26	22	1	\N	50	\N	2023-02-13 12:23:24.827019	\N	\N
27	23	1	\N	20	\N	2023-02-13 12:23:57.969581	\N	\N
28	24	1	\N	80	\N	2023-02-13 12:24:37.667669	\N	\N
29	25	1	\N	80	\N	2023-02-13 12:25:49.380648	\N	\N
30	26	1	\N	30	\N	2023-02-13 12:26:09.860572	\N	\N
31	27	1	\N	50	\N	2023-02-13 12:26:28.153078	\N	\N
32	28	1	\N	90	\N	2023-02-13 12:26:52.868489	\N	\N
33	29	1	\N	80	\N	2023-02-13 12:27:14.178191	\N	\N
34	30	1	\N	80	\N	2023-02-13 12:27:55.055996	\N	\N
35	31	1	\N	90	\N	2023-02-13 12:28:18.775681	\N	\N
36	32	1	\N	90	\N	2023-02-13 12:28:51.768057	\N	\N
37	33	1	\N	90	\N	2023-02-13 12:29:23.401323	\N	\N
38	34	1	\N	60	\N	2023-02-13 12:29:44.893683	\N	\N
39	35	1	\N	30	\N	2023-02-13 12:30:18.979959	\N	\N
40	36	1	\N	60	\N	2023-02-13 12:30:46.930917	\N	\N
41	37	1	\N	90	\N	2023-02-13 12:39:08.742685	\N	\N
42	38	1	\N	70	\N	2023-02-13 12:39:53.501873	\N	\N
43	39	1	\N	50	\N	2023-02-13 12:40:33.952004	\N	\N
44	40	1	\N	60	\N	2023-02-13 12:42:52.579556	\N	\N
45	41	1	\N	60	\N	2023-02-13 12:43:48.636726	\N	\N
46	42	1	\N	60	\N	2023-02-13 12:44:13.245903	\N	\N
47	43	1	\N	20	\N	2023-02-13 12:54:01.00222	\N	\N
48	44	1	\N	20	\N	2023-02-13 12:54:52.416009	\N	\N
49	45	1	\N	40	\N	2023-02-13 12:55:29.840348	\N	\N
50	46	1	\N	50	\N	2023-02-13 12:56:25.400672	\N	\N
51	47	1	\N	20	\N	2023-02-13 13:14:49.866143	\N	\N
52	48	25	\N	60	\N	2023-02-13 16:05:29.417625	\N	\N
53	49	25	\N	70	\N	2023-02-13 16:09:38.144684	\N	\N
54	50	25	\N	60	\N	2023-02-13 16:20:59.007981	\N	\N
55	51	25	\N	20	\N	2023-02-13 16:43:40.078822	\N	\N
56	52	25	\N	40	\N	2023-02-13 16:44:19.941794	\N	\N
57	53	25	\N	60	\N	2023-02-13 16:44:43.989196	\N	\N
58	54	25	\N	60	\N	2023-02-13 16:45:14.545347	\N	\N
59	55	25	\N	40	\N	2023-02-13 16:45:54.982341	\N	\N
60	56	25	\N	40	\N	2023-02-13 16:46:23.043149	\N	\N
61	57	25	\N	60	\N	2023-02-13 16:46:52.888657	\N	\N
62	58	25	\N	60	\N	2023-02-13 16:48:03.603981	\N	\N
63	59	25	\N	70	\N	2023-02-13 16:49:13.830911	\N	\N
64	60	25	\N	80	\N	2023-02-13 16:49:53.627199	\N	\N
65	61	25	\N	70	\N	2023-02-13 16:50:16.754735	\N	\N
66	62	25	\N	70	\N	2023-02-13 16:50:55.959806	\N	\N
67	63	25	\N	80	\N	2023-02-13 16:51:35.519379	\N	\N
68	64	2	\N	60	\N	2023-02-13 17:23:21.007944	\N	\N
69	65	2	\N	70	\N	2023-02-13 17:23:43.924747	\N	\N
71	66	25	\N	40	\N	2023-02-13 17:52:19.661311	\N	\N
72	67	25	\N	40	\N	2023-02-13 18:07:52.803071	\N	\N
73	35	2	\N	20	\N	2023-02-13 18:18:53.913254	\N	\N
\.


--
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.ratings (id, resource_id, profile_id, rate, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	4	2023-02-13 11:50:25.22439	\N	\N
2	2	1	2	2023-02-13 11:50:25.22439	\N	\N
3	2	3	5	2023-02-13 11:50:25.22439	\N	\N
4	2	2	5	2023-02-13 11:50:25.22439	\N	\N
5	3	1	4	2023-02-13 12:09:06.367881	\N	\N
6	4	1	3	2023-02-13 12:09:36.780099	\N	\N
7	5	1	4	2023-02-13 12:10:03.817857	\N	\N
8	6	1	4	2023-02-13 12:10:29.926772	\N	\N
9	7	1	4	2023-02-13 12:10:54.644432	\N	\N
10	8	1	3	2023-02-13 12:11:21.423233	\N	\N
11	9	1	3	2023-02-13 12:11:49.037606	\N	\N
12	10	1	4	2023-02-13 12:12:18.254862	\N	\N
13	11	1	4	2023-02-13 12:12:46.192823	\N	\N
14	12	1	3	2023-02-13 12:13:16.371902	\N	\N
15	13	1	4	2023-02-13 12:13:38.889838	\N	\N
16	14	1	4	2023-02-13 12:15:43.236776	\N	\N
17	15	1	4	2023-02-13 12:16:04.943389	\N	\N
19	16	1	4	2023-02-13 12:19:01.103901	\N	\N
20	17	1	4	2023-02-13 12:19:38.408619	\N	\N
21	18	1	4	2023-02-13 12:20:12.560057	\N	\N
22	19	1	4	2023-02-13 12:21:14.694699	\N	\N
23	20	1	4	2023-02-13 12:21:42.839201	\N	\N
24	21	1	4	2023-02-13 12:22:24.757951	\N	\N
25	22	1	4	2023-02-13 12:23:24.827019	\N	\N
26	23	1	4	2023-02-13 12:23:57.969581	\N	\N
27	24	1	4	2023-02-13 12:24:37.667669	\N	\N
28	25	1	4	2023-02-13 12:25:49.380648	\N	\N
29	26	1	3	2023-02-13 12:26:09.860572	\N	\N
30	27	1	4	2023-02-13 12:26:28.153078	\N	\N
31	28	1	4	2023-02-13 12:26:52.868489	\N	\N
32	29	1	4	2023-02-13 12:27:14.178191	\N	\N
33	30	1	4	2023-02-13 12:27:55.055996	\N	\N
34	31	1	3	2023-02-13 12:28:18.775681	\N	\N
35	32	1	4	2023-02-13 12:28:51.768057	\N	\N
36	33	1	5	2023-02-13 12:29:23.401323	\N	\N
37	34	1	3	2023-02-13 12:29:44.893683	\N	\N
38	35	1	3	2023-02-13 12:30:18.979959	\N	\N
39	36	1	1	2023-02-13 12:30:46.930917	\N	\N
40	37	1	4	2023-02-13 12:39:08.742685	\N	\N
41	38	1	2	2023-02-13 12:39:53.501873	\N	\N
42	39	1	3	2023-02-13 12:40:33.952004	\N	\N
43	40	1	2	2023-02-13 12:42:52.579556	\N	\N
44	41	1	1	2023-02-13 12:43:48.636726	\N	\N
45	42	1	2	2023-02-13 12:44:13.245903	\N	\N
46	43	1	4	2023-02-13 12:54:01.00222	\N	\N
47	44	1	3	2023-02-13 12:54:52.416009	\N	\N
48	45	1	3	2023-02-13 12:55:29.840348	\N	\N
49	46	1	2	2023-02-13 12:56:25.400672	\N	\N
50	47	1	3	2023-02-13 13:14:49.866143	\N	\N
51	48	25	4	2023-02-13 16:05:29.417625	\N	\N
52	49	25	4	2023-02-13 16:09:38.144684	\N	\N
53	50	25	4	2023-02-13 16:20:59.007981	\N	\N
54	51	25	4	2023-02-13 16:43:40.078822	\N	\N
55	52	25	3	2023-02-13 16:44:19.941794	\N	\N
56	53	25	4	2023-02-13 16:44:43.989196	\N	\N
57	54	25	5	2023-02-13 16:45:14.545347	\N	\N
58	55	25	4	2023-02-13 16:45:54.982341	\N	\N
59	56	25	4	2023-02-13 16:46:23.043149	\N	\N
60	57	25	4	2023-02-13 16:46:52.888657	\N	\N
61	58	25	3	2023-02-13 16:48:03.603981	\N	\N
62	59	25	2	2023-02-13 16:49:13.830911	\N	\N
63	60	25	4	2023-02-13 16:49:53.627199	\N	\N
64	61	25	4	2023-02-13 16:50:16.754735	\N	\N
65	62	25	3	2023-02-13 16:50:55.959806	\N	\N
66	63	25	4	2023-02-13 16:51:35.519379	\N	\N
67	64	2	4	2023-02-13 17:23:21.007944	\N	\N
68	65	2	3	2023-02-13 17:23:43.924747	\N	\N
69	66	25	4	2023-02-13 17:52:19.661311	\N	\N
70	67	25	3	2023-02-13 18:07:52.803071	\N	\N
71	35	2	4	2023-02-13 18:18:53.913254	\N	\N
\.


--
-- Data for Name: recommends; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.recommends (id, resource_id, profile_id, is_recommended, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	t	2023-02-13 11:50:25.245693	\N	\N
\.


--
-- Data for Name: reports; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.reports (id, resource_id, profile_id, is_reported, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	f	2023-02-13 11:50:25.248651	\N	\N
\.


--
-- Data for Name: resources; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.resources (id, profile_id, url, title, description, thumbnail, created_at, updated_at, deleted_at) FROM stdin;
2	2	https://www.youtube.com/watch?v=_y9oxzTGERs	Introduction to JavaScript	This course introduces you to JavaScript, the most popular programming language for web development. You can also try the interactive version of the course here: https://scrimba.com/g/gintrotojavascript\n\n  The course contains 14 lessons and 7 challenges. In the challenges, you will be encourage to jump into the code and get your hands dirty. This is both fun and great for making the knowledge stick.	https://i.ytimg.com/vi/_y9oxzTGERs/sddefault.jpg	2023-02-13 11:50:25.217921	\N	\N
3	1	https://www.youtube.com/watch?v=W6NZfCO5SIk	JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour	Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. \n🔥 Want to master JavaScript? Get my complete JavaScript course: https://bit.ly/3Uod3vF\n👍 Subscribe for more tutorials like this: https://goo.gl/6PYaGF\n\n⭐️ Want to learn more from me? Check out these links: \n\nCourses: https://codewithmosh.com\nTwitter: https://twitter.com/moshhamedani\nFacebook: https://www.facebook.com/programmingwithmosh/\nBlog: http://programmingwithmosh.com \n\nJavaScript is one of the most popular programming languages in 2022. A lot of people are learning JavaScript to become front-end and/or back-end developers. \n\nI've designed this JavaScript tutorial for beginners to learn JavaScript from scratch. We'll start off by answering the frequently asked questions by beginners about JavaScript and shortly after we'll set up our development environment and start coding. \n\nWhether you're a beginner and want to learn to code, or you know any programming language and just want to learn JavaScript for web development, this tutorial helps you learn JavaScript fast. \n\nYou don't need any prior experience with JavaScript or any other programming languages. Just watch this JavaScript tutorial to the end and you'll be writing JavaScript code in no time. \n\nIf you want to become a front-end developer, you have to learn JavaScript. It is the programming language that every front-end developer must know. \n\nYou can also use JavaScript on the back-end using Node. Node is a run-time environment for executing JavaScript code outside of a browser. With Node and Express (a popular JavaScript framework), you can build back-end of web and mobile applications. \n\nIf you're looking for a crash course that helps you get started with JavaScript quickly, this course is for you. \n\n⭐️TABLE OF CONTENT ⭐️\n\n00:00 What is JavaScript\n04:41 Setting Up the Development Environment \n07:52 JavaScript in Browsers\n11:41 Separation of Concerns\n13:47 JavaScript in Node\n16:11 Variables\n21:49 Constants\n23:35 Primitive Types \n26:47 Dynamic Typing \n30:06 Objects\n35:22 Arrays\n39:41 Functions\n44:22 Types of Functions \n\n⭐️Related Tutorials ⭐️\nNode tutorial for beginners: \nhttps://youtu.be/TlB_eWDSMt4\n\nExpress.js tutorial for beginners:\nhttps://youtu.be/pKd0Rpw7O48\n\nReact tutorial for beginners:\nhttps://youtu.be/Ke90Tje7VS0\n\nAngular tutorial for beginners: \nhttps://youtu.be/k5E2AVpwsko	https://i.ytimg.com/vi/W6NZfCO5SIk/sddefault.jpg	2023-02-13 12:09:06.367881	\N	\N
4	1	https://www.youtube.com/watch?v=aS41Y_eyNrU&t=1s	SMOOSHCAST: React Fiber Deep Dive with Dan Abramov	Jani and Phil got a problem. There are too many damn divs! With the help of Jenn Creighton and special guest Dan Abramov, we learn how to hack React Fiber reconciler internals to make the world a less div-ided place.\n\nIn this deep dive you'll learn how to contribute to React Fiber, and implement a new rendering mode for React.\n\nSpecial thanks to Dan:\nhttp://twitter.com/dan_abramov\n\nThe following unpaid actors were not harmed during the production of this video:\n\nJenn Creighton https://twitter.com/gurlcode\nPhil Pluckthun https://twitter.com/_philpl\nJani Eväkallio https://twitter.com/jevakallio\n\nHosted by:\nJani Eväkallio https://twitter.com/smoosh_comedy	https://i.ytimg.com/vi/aS41Y_eyNrU/sddefault.jpg	2023-02-13 12:09:36.780099	\N	\N
5	1	https://www.youtube.com/watch?v=rxnX1jdoI6c	5 common beginner CSS mistakes	I often see beginners making the same mistakes over and over again, so in this video I take a look at some common issues and give some advice on how I think things could be improved.\n\n🔗 Links \n✅ Live Server VS Code extension: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer\n✅ Flexbox or Grid - How to decide? https://youtu.be/3elGSZSWTbM\n\n⌚ Timestamps\n00:00 - Introduction\n00:35 - Useless declarations (that can cause problems)\n04:04 - Over-reliance of Flexbox\n06:37 - Using very specific values\n10:44 - Terrible class names and numbering elements for no reason\n14:00 - Over-reliance on position absolute\n\n#css\n\n--\n\nCome hang out with other dev's in my Discord Community\n💬 https://discord.gg/nTYCvrK\n\nKeep up to date with everything I'm up to\n✉ https://www.kevinpowell.co/newsletter\n\nCome hang out with me live every Monday on Twitch!\n📺 https://www.twitch.tv/kevinpowellcss\n\n---\n\nHelp support my channel\n👨‍🎓 Get a course: https://www.kevinpowell.co/courses\n👕 Buy a shirt: https://teespring.com/stores/making-the-internet-awesome\n💖 Support me on Patreon: https://www.patreon.com/kevinpowell\n\n---\n\nMy editor: VS Code - https://code.visualstudio.com/\n\n---\n\nI'm on some other places on the internet too!\n\nIf you'd like a behind the scenes and previews of what's coming up on my YouTube channel, make sure to follow me on Instagram and Twitter.\n\nTwitter: https://twitter.com/KevinJPowell\nCodepen: https://codepen.io/kevinpowell/\nGithub: https://github.com/kevin-powell\n\n---\n\nAnd whatever you do, don't forget to keep on making your corner of the internet just a little bit more awesome!	https://i.ytimg.com/vi/rxnX1jdoI6c/sddefault.jpg	2023-02-13 12:10:03.817857	\N	\N
6	1	https://www.youtube.com/watch?v=0KEpWHtG10M	Material UI Tutorial #1 - Intro & Setup	Hey gang & welcome to this Material UI tutorial for React. In this series we'll be looking at what Material UI is & how to use it to create greate-looking React applications. To begin with we'll set up our starter project.\n\n🐱‍💻 🐱‍💻 Course Files:\n+ https://github.com/iamshaunjp/material-ui-tut\n\n🐱‍👤🐱‍👤 JOIN THE GANG - \nhttps://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg/join\n\n🐱‍💻 🐱‍💻 My Udemy Courses:\n+ Modern JavaScript - https://www.thenetninja.co.uk/udemy/modern-javascript\n+ Vue JS 3  & Firebase - https://www.thenetninja.co.uk/udemy/vue-and-firebase\n+ D3.js & Firebase - https://www.thenetninja.co.uk/udemy/d3-and-firebase\n\n🐱‍💻 🐱‍💻 Useful playlists:\n+ Full React tutorial - https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d\n+ JSON Server Tutorial - https://www.youtube.com/watch?v=mAqYJF-yxO8&list=PL4cUxeGkcC9i2v2ZqJgydXIcRq_ZizIdD\n\n🐱‍💻 🐱‍💻 Other links:\n+ Material UI docs - https://material-ui.com/getting-started/installation/\n+ Get VS Code - https://code.visualstudio.com/\n\n🐱‍💻 🐱‍💻 Social Links:\nFacebook - https://www.facebook.com/thenetninjauk\nTwitter - https://twitter.com/thenetninjauk\nInstagram - https://www.instagram.com/thenetninja/	https://i.ytimg.com/vi/0KEpWHtG10M/sddefault.jpg	2023-02-13 12:10:29.926772	\N	\N
22	1	https://www.youtube.com/watch?v=Wq7rZxU3_pw	PHP vs NodeJS vs Python vs Ruby: what do the numbers say?	PHP or NodeJS or Python or Ruby... four server-side scripting languages, but which one is worth investing time and effort in? Thanks to the Stack Overflow Developer Survey, and measures of server usage, we have the means to draw an objective conclusion about the respective strengths and weaknesses of these different backend languages. But... which one is worth your time? \n#PHP #NodeJS #Python #Ruby\n----------\nSign up now for "JavaScript, the First Steps" available on the 1st of June, and get 50% off! https://kodaps.samcart.com/products/javascript-the-first-steps/	https://i.ytimg.com/vi/Wq7rZxU3_pw/sddefault.jpg	2023-02-13 12:23:24.827019	\N	\N
7	1	https://www.youtube.com/watch?v=r8Dg0KVnfMA&t=1s	Learn React Query In 50 Minutes	Learn React Today Course: https://courses.webdevsimplified.com/learn-react-today\n\nTanStack Query (also known as React Query) is my favorite way to interact with an external API. TanStack query is so easy to use and it gives you so many features by default which I love. In this video I go over everything you need to know about TanStack query in order to start implementing it in your React projects.\n\n\n📚 Materials/References:\n\nLearn React Today Course: https://courses.webdevsimplified.com/learn-react-today\nGitHub Code: https://github.com/WebDevSimplified/react-query-crash-course-example\nWhat Is React Query Video: https://youtu.be/lVLz_ASqAio\n\n\n🌎 Find Me Here:\n\nMy Blog: https://blog.webdevsimplified.com\nMy Courses: https://courses.webdevsimplified.com\nPatreon: https://www.patreon.com/WebDevSimplified\nTwitter: https://twitter.com/DevSimplified\nDiscord: https://discord.gg/7StTjnR\nGitHub: https://github.com/WebDevSimplified\nCodePen: https://codepen.io/WebDevSimplified\n\n\n⏱️ Timestamps:\n\n00:00 - Introduction\n00:44 - What Is TanStack Query\n01:20 - Setup\n03:18 - Basic Example\n14:15 - useQuery Basics\n26:10 - useMutation Basics\n39:12 - Pagination\n41:28 - Infinite Scrolling\n44:40 - useQueries Hook\n47:22 - Prefetching\n49:13 - Initial/Placeholder Data\n\n\n#TanStackQuery #WDS #ReactQuery	https://i.ytimg.com/vi/r8Dg0KVnfMA/sddefault.jpg	2023-02-13 12:10:54.644432	\N	\N
8	1	https://www.youtube.com/watch?v=3VHCxuxtuL8	How to Use YouTube API in Node - Full Tutorial	In this video you will learn how to use Youtube API in Node in two ways: as a plain Youtube API and with usage of library. We will start by creating a project and obtaining a key in Google Cloud. Then we will build a real example of how to use Youtube API in Node by making API requests with axios library. After that we will implement and example with google apis library which is a sugar around Youtube API.\n\n► CHECK MY COURSES - https://monsterlessons-academy.com/courses\n\nFOLLOW ME\n► TWITTER - https://twitter.com/monster_lessons\n\nREFERENCES\n► Source code - https://github.com/monsterlessonsacademy/monsterlessonsacademy/tree/108-how-to-use-youtube-api-in-node\n\nRECOMMENDED VIDEOS\n► Angular Tutorial for Beginners - https://youtu.be/Pd98NIR63cU\n► Vue JS Crash Course - https://youtu.be/89z5opT_3so\n► React Hooks Full Course  - https://youtu.be/h7RC-aVmPqE\n► Typescript Course for Beginners - https://youtu.be/RXZoCljqYOE\n► Build a Todo App with Angular - https://youtu.be/uyTC0Skvvls\n\nSTUFF I USE\n► My mac mini for home on Amazon - https://geni.us/mADK6ob\n► Mac macbook to go on Amazon - https://geni.us/t0fC\n► My monitors on Amazon - https://geni.us/aRoFoR\n► My mouse on Amazon - https://geni.us/FTzq\n► My keyboard on Amazon - https://geni.us/wAjpl\n\n► My Synology NAS on Amazon - https://geni.us/H9BeFo\n► My Seagate IronWolf 4TB HDD on Amazon - https://geni.us/09Hvpm\n► My external SSD drive on Amazon - https://geni.us/jg3MGNt\n► My external HDD drive on Amazon - https://geni.us/5HCIAX\n\n► My monitor arm on Amazon - https://geni.us/OuX1\n► My chair on Amazon - https://geni.us/wGWq\n► My speakers on Amazon - https://geni.us/wM4fIn\n► My coffee machine on Amazon - https://geni.us/zP1uEbW\n► My standing desk - https://www.fully.com/en-eu/standing-desks/jarvis/jarvis-adjustable-height-desk-laminate.html\n\nDisclosures: All opinions are my own. Sponsors are acknowledged. Some links in the description are affiliate links that if you click on one of the product links, I’ll receive a commission at no additional cost to you.  As an Amazon Associate I earn a small commission from qualifying purchases.	https://i.ytimg.com/vi/3VHCxuxtuL8/sddefault.jpg	2023-02-13 12:11:21.423233	\N	\N
9	1	https://www.youtube.com/watch?v=ha3a63YjLro	Material UI Tutorial #2 - Typography	Hey gang, in this Material UI tutorial we'll take a look at the Typography component to make/style headings & normal text.\n\n🐱‍💻 🐱‍💻 Course Files:\n+ https://github.com/iamshaunjp/material-ui-tut\n\n🐱‍👤🐱‍👤 JOIN THE GANG - \nhttps://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg/join\n\n🐱‍💻 🐱‍💻 My Udemy Courses:\n+ Modern JavaScript - https://www.thenetninja.co.uk/udemy/modern-javascript\n+ Vue JS 3  & Firebase - https://www.thenetninja.co.uk/udemy/vue-and-firebase\n+ D3.js & Firebase - https://www.thenetninja.co.uk/udemy/d3-and-firebase\n\n🐱‍💻 🐱‍💻 Useful playlists:\n+ Full React tutorial - https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d\n+ JSON Server Tutorial - https://www.youtube.com/watch?v=mAqYJF-yxO8&list=PL4cUxeGkcC9i2v2ZqJgydXIcRq_ZizIdD\n\n🐱‍💻 🐱‍💻 Other links:\n+ Material UI docs - https://material-ui.com/getting-started/installation/\n+ Get VS Code - https://code.visualstudio.com/\n\n🐱‍💻 🐱‍💻 Social Links:\nFacebook - https://www.facebook.com/thenetninjauk\nTwitter - https://twitter.com/thenetninjauk\nInstagram - https://www.instagram.com/thenetninja/	https://i.ytimg.com/vi/ha3a63YjLro/sddefault.jpg	2023-02-13 12:11:49.037606	\N	\N
10	1	https://www.youtube.com/watch?v=s-yvlPTDak0	ChatGPT Teaches Flexbox!	ChatGPT is an AI chatbot that can provide human-like responses to questions we ask. I asked it to create a video tutorial script about Flexbox, along with the code to go with it. This is what it came up with.\n\nLet me know your thoughts in the comments down below :).\n\n⭐⭐ Get access to all courses (including premium courses not found anywhere else) on Net Ninja Pro - https://netninja.dev/	https://i.ytimg.com/vi/s-yvlPTDak0/sddefault.jpg	2023-02-13 12:12:18.254862	\N	\N
11	1	https://www.youtube.com/watch?v=r-yxNNO1EI8	YouTube API Project With Authentication	In this JavaScript project we will use the YouTube API v3 to fetch channel data and videos. We will create a search form to change channels and use OAuth2 to login and logout.\n\nSponsor: Coding Phase [GET 50% OFF!!] \nhttps://codingphase.teachable.com/p/all-courses-subscription/?coupon_code=TRAVERSY50&affcode=117955_0bufn2zv\n\nCode:\nhttps://github.com/bradtraversy/youtube_api_auth_app\n\nDocs:\nhttps://developers.google.com/youtube/v3/quickstart/js\nhttps://developers.google.com/youtube/v3/docs/playlistItems/list\n\n💖 Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\nhttp://www.facebook.com/traversymedia\nhttp://www.twitter.com/traversymedia\nhttp://www.instagram.com/traversymedia	https://i.ytimg.com/vi/r-yxNNO1EI8/sddefault.jpg	2023-02-13 12:12:46.192823	\N	\N
12	1	https://www.youtube.com/watch?v=9sWEecNUW-o	Code your own YouTube app: YouTube API + HTML + CSS + JavaScript (full tutorial)	Create a dynamic YouTube playlist app using HTML, CSS, Javascript and jQuery.\n\n🔗The Completed App - https://codepen.io/Middi/pen/QQrOdB\n\n🔗 Thumbnail image - https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg\n🔗YouTube Logo - https://github.com/Middi/youtube-api/blob/master/images/logo.png\n\n🎥Check out Richard's YouTube channel - https://www.youtube.com/channel/UCimIdsDPn0mE03Cb7C6aR8Q\n\n--\n\nLearn to code for free and get a developer job: https://www.freecodecamp.com\n\nRead hundreds of articles on programming: https://medium.freecodecamp.com	https://i.ytimg.com/vi/9sWEecNUW-o/sddefault.jpg	2023-02-13 12:13:16.371902	\N	\N
13	1	https://www.youtube.com/watch?v=NQULKpW6hK4	React Query Crash Course	This crash course will teach you all about React Query\n\nSecond Channel:\nhttps://www.youtube.com/channel/UCfNFgrUzeDSb-W3L3nnjC5A\n\nGitHub Repo:\nhttps://github.com/harblaith7/React-Query\n\nTimeline:\n0:00 - Introduction\n2:24 - Fetching without React Query\n11:50 - Refactor to use React Query\n23:48 - Pagination	https://i.ytimg.com/vi/NQULKpW6hK4/sddefault.jpg	2023-02-13 12:13:38.889838	\N	\N
60	25	https://www.youtube.com/watch?v=jl29qI62XPg	JavaScript 2D Game Tutorial	Who says learning JavaScript cannot be fun. Let's take another step towards Front End Web Development mastery and practice fundamental programming principles and techniques in this vanilla JavaScript 2D game tutorial. \n\nPART2: https://youtu.be/MwTQtPGuBmo\n\nSome people skip my generative art and HTML canvas animation videos and just focus on game tutorials, but I want to show you that all canvas techniques I teach can improve your games, if you get creative with it. \n	https://i.ytimg.com/vi/jl29qI62XPg/sddefault.jpg	2023-02-13 16:49:53.627199	\N	\N
14	1	https://www.youtube.com/watch?v=PkZNo7MFNFg	Learn JavaScript - Full Course for Beginners	This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language.\n\n⭐️Curriculum⭐️\nThis is a stand-alone video but it follows the JavaScript curriculum at freecodecamp.org. Access the curriculum here:\n🔗 Basic JavaScript: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript\n🔗 ES6 JavaScript: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6\n\n⭐️Code⭐️\nThis course was created using scrimba.com. Access the course there along with the code:\n🔗 Basic JavaScript: https://scrimba.com/playlist/pny4ghw\n🔗 ES6 JavaScript: https://scrimba.com/playlist/p7v3gCd\n\n🐦🐦 Follow course creator Beau Carnes on Twitter: https://www.twitter.com/BeauCarnes\n\n⭐️Course Contents⭐️\n0:00:00 Introduction\n0:01:24 Running JavaScript\n0:04:23 Comment Your Code\n0:05:56 Declare Variables\n0:06:15 Storing Values with the Assignment Operator\n0:11:31 Initializing Variables with the Assignment Operator\n0:11:58 Uninitialized Variables\n0:12:40 Case Sensitivity in Variables\n0:14:05 Basic Math\n0:15:30 Increment and Decrement\n0:16:22 Decimal Numbers\n0:16:48 Multiply Two Decimals\n0:17:18 Divide Decimals\n0:17:33 Finding a Remainder\n0:18:22 Augmented Math Operations\n0:21:19 Declare String Variables\n0:22:01 Escaping Literal Quotes\n0:23:44 Quoting Strings with Single Quotes\n0:25:18 Escape Sequences\n0:26:46 Plus Operator\n0:27:49 Plus Equals Operator\n0:29:01 Constructing Strings with Variables\n0:30:14 Appending Variables to Strings\n0:31:11 Length of a String\n0:32:01 Bracket Notation\n0:33:27 Understand String Immutability\n0:34:23 Find the Nth Character\n0:36:28 Word Blanks\n0:40:44 Arrays\n0:41:43 Nest Arrays\n0:42:33 Access Array Data\n0:43:34 Modify Array Data\n0:44:48 Access Multi-Dimensional Arrays\n0:46:30 push()\n0:47:29 pop()\n0:48:33 shift()\n0:49:23 unshift()\n0:50:36 Shopping List\n0:51:41 Write Reusable with Functions\n0:53:41 Arguments\n0:55:43 Global Scope\n0:59:31 Local Scope\n1:00:46 Global vs Local Scope in Functions\n1:02:40 Return a Value from a Function\n1:03:55 Undefined Value returned\n1:04:52 Assignment with a Returned Value\n1:05:52 Stand in Line\n1:08:41 Boolean Values\n1:09:24 If Statements\n1:11:51 Equality Operators\n1:19:17 And / Or Operators\n1:21:37 Else Statements\n1:22:27 Else If Statements\n1:23:30 Logical Order in If Else Statements\n1:24:45 Chaining If Else Statements\n1:27:45 Golf Code\n1:32:15 Switch Statements\n1:41:11 Returning Boolean Values from 	https://i.ytimg.com/vi/PkZNo7MFNFg/sddefault.jpg	2023-02-13 12:15:43.236776	\N	\N
16	1	https://www.youtube.com/watch?v=PlbupGCBV6w&list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4	JavaScript Tutorial for Beginners | Introduction	Instagram : https://www.instagram.com/navinreddyofficial/\nLinkedin : https://in.linkedin.com/in/navinreddy20\nDiscord : https://discord.gg/aXPF5hV7\n\nMore Learning :\n\nJava - https://bit.ly/3xleOA2\nPython   :- https://bit.ly/3H0DYHx\nDjango  :- https://bit.ly/3awMaD8\nSpring Boot  :- https://bit.ly/3aucCgB\nSpring Framework :- https://bit.ly/3GRfxwe\n\nServlet & JSP  :- https://bit.ly/3mh5CGz\nHibernate Tutorial :- https://bit.ly/3NWAKah\nRest API | Web Service Tutorial :- https://bit.ly/38RJCiy\n\nGit :- https://bit.ly/3NUHB3V\nJavaScript  :- https://bit.ly/3mkcFys\nKotlin  :- https://bit.ly/3GR2DOG	https://i.ytimg.com/vi/PlbupGCBV6w/sddefault.jpg	2023-02-13 12:19:01.103901	\N	\N
17	1	https://www.youtube.com/watch?v=xjAu2Y2nJ34&list=PLDyQo7g0_nsX8_gZAB8KD1lL4j4halQBJ&index=3	Javascript Functions & Parameters | Javascript Tutorial For Beginners	Check out my courses and become more creative!\nhttps://developedbyed.com\n\nGetting Started With Javascript | Learn Javascript For Beginners\n\nIn this video series we are going to learn modern javascript from scratch. This video is recommended for anyone wanting to learn javascript the modern way with ES2015. No previous programming knowledge is required, so this video series will help you learn javascript as your first programming language.\n\nWe will also cover how to create functions and use them to write clean and scoped code in javascript. After we are going to create a simple function that is going to take a string and uppercase it for us once we invoke the function.\n\nFinally we are going to look at 3 different ways of writing a function. The ES6 being my favourite, arrow function.\n\nThings covered in this video:\n\nHow to create a function in javascript.\nDifferent types of functions we can use.\nHow to add parameters in functions.\n\n\n📔 Materials used in this video:\n\nVSCode: https://code.visualstudio.com/\n\n🛴 Follow me on:\n\nTwitter: https://twitter.com/deved94\nGithub: https://github.com/DevEdwin	https://i.ytimg.com/vi/xjAu2Y2nJ34/sddefault.jpg	2023-02-13 12:19:38.408619	\N	\N
18	1	https://www.youtube.com/watch?v=WZQc7RUAg18&list=PLDyQo7g0_nsX8_gZAB8KD1lL4j4halQBJ&index=11	ES6 Javascript Tutorial For Beginners | ES6 Crash Course	Check out my courses here!\nhttps://developedbyed.com\n\nES6 Javascript Tutorial For Beginners | ES6 Crash Course\n\nThis is a crash course of all the new features in javascript (ES6). We are going to take a look at all the new features, we will be writing\nall the code in old vanilla javascript and then we will refactor everything to ES6.\n\nThis course covers topics like arrow functions, the difference between a normal function and arrow functions, why not to use var and switch to\nconst and let variables, object deconstruction, default parameters, switching from constructor functions to classes, promises and more.\n\nI highly reccomend you take this course if you are a bit familiar with javascript and you want to learn all the modern features available \nin ES6, also known as ECMA Script 2015.\n\n❤Become a patreon for exclusive videos and more!\nhttps://www.patreon.com/dev_ed\nMicrophones I Use\nAudio-Technica AT2020 - https://geni.us/Re78 (Amazon)\nDeity V-Mic D3 Pro - https://geni.us/y0HjQbz (Amazon)\nBEHRINGER Audio Interface - https://geni.us/AcbCpd9 (Amazon)\n\nCamera Gear\nFujifilm X-T3 - https://geni.us/7IM1 (Amazon)\nFujinon XF18-55mmF2.8-4 - https://geni.us/sztaN (Amazon)\n\nPC Specs\nKingston SQ500S37/480G 480GB - https://geni.us/s7HWm (Amazon)\nGigabyte GeForce RTX 2070 - https://geni.us/uRw71gN (Amazon)\nAMD Ryzen 7 2700X - https://geni.us/NaBSC (Amazon)\nCorsair Vengeance LPX 16GB - https://geni.us/JDqK1KK (Amazon)\nASRock B450M PRO4 - https://geni.us/YAtI (Amazon) \nDeepCool ATX Mid Tower - https://geni.us/U8xJY (Amazon)\nDell Ultrasharp U2718Q 27-Inch 4K - https://geni.us/kXHE (Amazon)\nDell Ultra Sharp LED-Lit Monitor 25 2k - https://geni.us/bilekX (Amazon)\nLogitech G305 - https://geni.us/PIjyn (Amazon)\nLogitech MX Keys Advanced - https://geni.us/YBsCVX0 (Amazon)\n\nDISCLAIMERS:\nI am a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.\n\n\n📕 Things covered in this video:\n \n- let and const variables\n- arrow functions\n- concatination\n- classes\n- destructuring \n- default parameters\n- object literals\n- forEach, map and filter\n\n📔 Materials used in this video:\n\n VSCode\n\n🛴 Follow me on:\n\nTwitter: https://twitter.com/deved94\nGithub: https://github.com/DevEdwin\n\n🎵 Music:\n\nOutro: \nLAKEY INSPIRED - Me 2 (Feat. Julian Avila)\nMusic By: https://soundcloud.com/lakeyinspired\n\nIntro:\nDj Quads\nTrack Name: "Every Morning"\nMusic By: Dj Quads @ https://soundcloud.com/aka-dj-quads\n\nCreative Commons — Attribution-ShareAlike 3.0 Unported— CC BY-SA 3.0 \nhttp://creativecommons.org/licenses/b...	https://i.ytimg.com/vi/WZQc7RUAg18/sddefault.jpg	2023-02-13 12:20:12.560057	\N	\N
19	1	https://www.youtube.com/watch?v=Jld0aUQ9LZw	Python vs JavaScript - side by side comparison	Python vs JavaScript test of the relative performance.\nAs an example I took basic prime-finding algorithm with N² complexity.\n\nAll found primes are stored in a list/array and as the result scripts print the length of the list/array.\nI tested a relative speed of code writing, including typos.\nAnd the Python and JavaScript performance.\n\nPython vs JavaScript - side by side comparison\nhttps://youtu.be/Jld0aUQ9LZw\n\nFOLLOW ME:\nTelegram: https://t.me/red_eyed_coder_club\nTwitter:  https://twitter.com/CoderEyed\nFacebook: https://fb.me/redeyedcoderclub\n\nMY COURSES:\nhttps://www.patreon.com/posts/index-of-courses-54382548\nor \nhttps://red-eyed-coder-club.github.io/courses\n\n#python #javascript #redeyedcoderclub	https://i.ytimg.com/vi/Jld0aUQ9LZw/sddefault.jpg	2023-02-13 12:21:14.694699	\N	\N
20	1	https://www.youtube.com/watch?v=otfFJpXTeOY	Comparing Lines of Ruby to Python	This video is part of the Udacity course "Intro to Programming". Watch the full course at https://www.udacity.com/course/ud000	https://i.ytimg.com/vi/otfFJpXTeOY/sddefault.jpg	2023-02-13 12:21:42.839201	\N	\N
21	1	https://www.youtube.com/watch?v=FFmejnKd_YI	Ruby on Rails vs Python - which is best? (ruby vs python)	Get 1 month completely FREE access to Skillshare (including my Ruby on Rails 6 course):\nhttps://www.skillshare.com/r/profile/David-Battersby/699450490\n\nIn this video I'll discuss my thoughts on Ruby on Rails vs Python (ruby vs python). Since django is the most common framework that is using the Python programming language, I'll use that to compare against Ruby on Rails which uses the Ruby programming language.  So django vs ruby on rails, what is the best choice for a new project? From my experience in using both of these frameworks, they are actually surprisingly similar in approach and also share the same target market (startups, entrepreneurs and minimum viable products).\n\nWhat do you think about ruby on rails vs django? Let me know which you prefer in the comments below. Did you enjoy this video, want to see more videos like ruby on rails vs python? Make sure to like and subscribe for more content.\n\nCheck out my website, where you can purchase a completed version of some of my app builds to use as a starter for your own project. There are web app builds for Instagram, Craigslist, Reddit, Tinder and a Real Estate Platform.\n\n🌐 Purchase pre build web apps / online courses and more:\nhttps://www.davidbattersby.com\n\nThis video compares ruby on rails vs django (django uses the python programming language). Rails is great for building web apps really quickly. I frequently post tutorials that cover the basics of building web apps. Make sure to subscribe for more videos on how to use Ruby on Rails for startups and app development.	https://i.ytimg.com/vi/FFmejnKd_YI/sddefault.jpg	2023-02-13 12:22:24.757951	\N	\N
15	1	https://www.youtube.com/watch?v=zBPeGR48_vE&list=PLqkLaKB2GJhWXV9rcarwvn06ISlL_9mPQ	JavaScript Introduction	JavaScript Basic Guide. \nAbout JavaScript	https://i.ytimg.com/vi/zBPeGR48_vE/sddefault.jpg	2023-02-13 12:16:04.943389	2023-02-13 12:17:49.901847	2023-02-13 15:06:44.157426
23	1	https://www.youtube.com/watch?v=UYm0kfnRTJk	Ruby in 100 Seconds	Ruby is a dynamic programming language most well-know for powering the Ruby on Rails fullstack web framework. Learn why developers love the simple object-oriented code produced by the Ruby language. \n\n#programming #compsci #100SecondsOfCode\n\n🔗 Resources\n\nRuby Docs https://ruby-doc.org/\nRails RoR Docs https://rubyonrails.org/\n\n🔥 Get More Content - Upgrade to PRO\n\nUpgrade to Fireship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment. \n\n🎨 My Editor Settings\n\n- Atom One Dark \n- vscode-icons\n- Fira Code Font\n\n🔖 Topics Covered\n\n- What is Ruby used for?\n- Who invented Ruby?\n- Who invented Ruby on Rails?\n- Ruby quickstart\n- Ruby basics tutorial\n- Which Startups used Ruby on Rails?	https://i.ytimg.com/vi/UYm0kfnRTJk/sddefault.jpg	2023-02-13 12:23:57.969581	\N	\N
24	1	https://www.youtube.com/watch?v=Mus_vwhTCq0	JavaScript Pro Tips - Code This, NOT That	New Series! Code this 💪, not that 💩. Learn how to write solid modern JavaScript and avoid bad code from the olden days. https://angularfirebase.com\n\n- Source https://github.com/codediodeio/code-this-not-that-js	https://i.ytimg.com/vi/Mus_vwhTCq0/sddefault.jpg	2023-02-13 12:24:37.667669	\N	\N
25	1	https://www.youtube.com/watch?v=oxoFVqetl1E&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf	Top 10 JavaScript Interview Questions	Top 10 commonly Asked JavaScript Interview Questions and its possible answers. \n\n\n\n\n\nFor more interview questions checkout\n*https://www.fullstack.cafe/?utm_source=yt&utm_medium=techsith\n\n\n*My Udemy Courses\nhttps://www.udemy.com/js-masterclass/  \nhttps://www.udemy.com/course/react-hooks-course/\n\nFollow me for technology updates\n* https://facebook.com/techsith\n* https://www.facebook.com/groups/techsith\n* https://twitter.com/techsith1\n* https://www.linkedin.com/groups/13677140/\n* https://medium.com/@patelhemil\n\nHelp me translate this video. \n* https://www.youtube.com/timedtext_cs_panel?c=UCbGZKLIHpox2l0whz6_RYyg&tab=2\nNote: use https://translate.google.com/ to translate this video to your language.  Let me know once you do that so i can give you credit.  Thank you in advance.	https://i.ytimg.com/vi/oxoFVqetl1E/sddefault.jpg	2023-02-13 12:25:49.380648	\N	\N
26	1	https://www.youtube.com/watch?v=xwKbtUP87Dk	JavaScript Basics in 10 Minutes	Happy Web Dev Wednesday! This week we are moving on to the wonderful world of JavaScript. As a basic starting point, we will discuss variables, events & functions (ft.conditional statements) as a way to explore the dynamic functionality we can add to our web pages by including JavaScript. Enjoy!\n\nWebsite: https://www.topknotclare.com\nTwitter: https://www.twitter.com/topknot_clare	https://i.ytimg.com/vi/xwKbtUP87Dk/sddefault.jpg	2023-02-13 12:26:09.860572	\N	\N
27	1	https://www.youtube.com/watch?v=cd3P3yXyx30	React JS Tutorial - Basic to Advance (2023)	⭐️ There are 9 Courses in this Front End Development Specialization ⭐️ \n\n 👉(1)  Introduction to Front-End Development \n\n 👉(2)  Programming With JavaScript\n\n 👉(3)  Version Control\n\n 👉(4)  HTML and CSS in Depth : https://youtu.be/uCdliQCk4lE\n\n 👉(5)  React Basic - ✨THIS COURSE ✨\n\n 👉(6)  Advanced React - ✨THIS COURSE ✨\n\n 👉(7)  Principles of UX/UI Design \n\n 👉(8) Front-End Developer Capstone \n\n 👉(9) Coding Interview Preparation \n\n🔥🔥Course Material : https://drive.google.com/file/d/1t7fhOfcBGVxRIkkrVw_mDrO-VTVVcdd5/view?usp=share_link\n\n💠About this Course💠\nReact is a powerful JavaScript library that you can use to build user interfaces for web and mobile applications (apps). In this course, you will explore the fundamental concepts that underpin the React library and learn the basic skills required to build a simple, fast, and scalable app.\n\nBy the end of this course, you will be able to:\n• Use reusable components to render views where data changes over time\n• Create more scalable and maintainable websites and apps \n• Use props to pass data between components \n• Create dynamic and interactive web pages and apps\n• Use forms to allow users to interact with the web page \n• Build an application in React\n\nYou’ll gain experience with the following tools and software: \n• React.js\n• JSX\n• React\n• HTML, CSS and JavaScript \n• VSCode\n\n⭐⭐⭐⭐🕑TIME STAMP📋⭐⭐⭐⭐⭐\n👉REACT BASIC\n0:00:00 Course Introduction \n0:06:04 React Component and where they live\n0:36:39 Component use and styling \n1:01:30 Dynamic events and how to handle them\n1:19:58 Data and Events\n2:01:03 Linking and Routing \n2:19:19 Using Assets in React\n2:38:51 Graded Assessment Calculator App\n2:45:45 Course Wrap Up\n2:47:47 Setting up VS code \n\n👉ADVANCED REACT\n2:53:26 Course Introduction \n3:08:39 Rendering lists in React \n3:24:42 Forms in React \n3:38:32 React Context \n3:53:34 Getting Started with Hooks\n4:18:12 Rules of Hooks and Fetching Data with Hooks\n4:36:43 Advanced Hooks\n4:47:32 JSX Deep Dive \n5:14:28 Reusing behavior \n5:28:37 Integration Tests with React Testing Library\n5:50:35 Graded Assessment \n6:00:33 Course Wrap up\n\n🧾 For Earning the Certificate, Enroll in this Course here®️:  https://www.coursera.org/\n\n✨✨PLEASE IGNORE THESE TAGS✨✨\n#reactjs,\n#reactjstutorial,\nreact js full course,\nreact js tutorial for beginners,\nreact js crash course,\nreact js projects for beginners,\nreact js hooks,\nreact js advanced concepts,\nreact js advanced tutorial,\nreact js advanced,\nadvanced react js,\nreact js beginner tutorial,\nreact js basics,\nreact js beginner projects,\nreact js beginner,\nreact js beginner to advanced,\nreact js complete tutorial,\nreact js explained,\n2023,\n#completecourse	https://i.ytimg.com/vi/cd3P3yXyx30/sddefault.jpg	2023-02-13 12:26:28.153078	\N	\N
28	1	https://www.youtube.com/watch?v=xCZHcuuHGco&list=PLjxZxD6BDkeZoRU6v7gMyQ7BirGD6u0Lt	Pure Component in React JS | Advanced React	In this video, We're going to learn about PureComponent in React. \n\nReact's PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.\n\nIn upcoming videos I'm going to cover lots of Advanced concepts of React, so do subscribe if you want to learn more!\n\nLike, Sub🥂 & Share! ♥\n\nBuy me a coffee and Support this channel♥:\nhttps://www.buymeacoffee.com/CodeBucks\n\nCode of this tutorial can be found here:\nhttps://github.com/codebucks27/React-Tutorials\n\nLearn More About,\n\nBuild Awesome stuff with ReactJs (Playlist) :\nhttps://youtube.com/playlist?list=PLjxZxD6BDkebOPXoqccGpiinfdY9zybXm\n\nLearn React Basics (Playlist):\nhttps://youtube.com/playlist?list=PLjxZxD6BDkeaoXAMrtBLkpYQ0feAh2tAj\n\nReact Advanced Topic (Playlist) :\nhttps://www.youtube.com/playlist?list=PLjxZxD6BDkeZoRU6v7gMyQ7BirGD6u0Lt\n\nIf you have any suggestions regarding any topics in Web Development feel free to reach out or just comment below.\n\n\nThank You for watching! 😉\nBuy me a coffee and Support this channel♥:\nhttps://www.buymeacoffee.com/CodeBucks\n\nWhere else you can find me:\nTwitter🐤 : https://twitter.com/code_bucks\nLinkedIn 🔗:  https://www.linkedin.com/in/codebucks/\nInstagram 📫: https://www.instagram.com/code.bucks \nEmail 📧: codebucks27@gmail.com\n#purecomponentinreact\n#reactadvanced	https://i.ytimg.com/vi/xCZHcuuHGco/sddefault.jpg	2023-02-13 12:26:52.868489	\N	\N
29	1	https://www.youtube.com/watch?v=b0IZo2Aho9Y	10 React Antipatterns to Avoid - Code This, Not That!	React is a minimal on the surface, but it’s actually a highly complex JavaScript UI library with many potential pitfalls. In this tutorial, we look at 10 antipatterns in React, along with tips and tricks to improve our code. https://fireship.io/courses/react\n\n#react #js #CodeThisNotThat\n\n🔥  Use this discount code to get 33% off Fireship PRO:\n\nhh7F4Ezs\n\nhttps://fireship.io/pro\n\n\n🔗 Resources\n\nReact Docs https://reactjs.org\nFull React Course https://fireship.io/courses/react\nReact in 100 Seconds https://youtu.be/Tn6-PIqc4UM\n\n📚 Chapters\n\n00:00 React Antipatterns\n01:00 1. Big Components\n01:55 2. Nesting Gotcha\n02:35 3. Failure to Memoize\n03:15 4. Useless Divs\n03:44 5. Messy Files\n04:40 6. Big Bundles\n05:34 7. Prop Drilling\n06:30 8. Prop Plowing\n07:00 9. Try Some Curry\n07:39 10. Code Smarter\n\n🎨 My Editor Settings\n\n- Atom One Dark \n- vscode-icons\n- Fira Code Font\n\n🔖 Topics Covered\n\n- React Pitfalls\n- React Code Smell\n- Problems with React.js\n- React Best Practices\n- Structure a react project\n- Antipatterns in react to avoid\n- React tips and tricks\n- React interview tips	https://i.ytimg.com/vi/b0IZo2Aho9Y/sddefault.jpg	2023-02-13 12:27:14.178191	\N	\N
30	1	https://www.youtube.com/watch?v=Zpvzv8Uma8Q	HARD React Interview Questions (3 patterns)	Maybe you've been doing React for a few years and are ready for a senior role. But you wonder: what'll be asked in an advanced React interview?!\n\nOr maybe you're just curious about how hard an interview could get. No matter. \n\nIn this video, I give you an idea of what types of questions you could reasonably expect from an advanced/senior React developer hiring process.\n\nLet me know if you find them helpful! \n\nLinks to all three patterns: \nhttps://reactjs.org/docs/higher-order-components.html\nhttps://reactjs.org/docs/render-props.html\nhttps://reactjs.org/docs/hooks-custom.html\n\n0:00 Intro\n1:01 Pattern 1\n2:42 Pattern 2\n4:12 Pattern 3\n--\nFollow Me Online Here:\n\n🌏 My website/blog - https://peterelbaum.com\n✉️ My newsletter (weekly on Sundays) - https://peterelbaum.com/subscribe/\n🤓 My courses: https://peterelbaum.gumroad.com/\n🗣 One-on-one mentoring - https://superpeer.com/peterelbaum\n\n🐦 Twitter: https://twitter.com/peterelbaum\n💻 GitHub: https://github.com/elbaumpj\n☎️ Office Hours: https://calendly.com/elbaumpj/saturday-office-hours\n-- \nMy gear: \n\nMain Camera: https://amzn.to/2Tv1WBe\nTripod: https://amzn.to/2t570AH\nExternal HD: https://amzn.to/2t1UphI\nMemory card: https://amzn.to/2UEQfIn\nComputer mic: https://amzn.to/2t7mUue\n--\nWho am I? \n\nI'm Peter Elbaum, a software engineer living in Raleigh, North Carolina. I make videos about code, software engineering career development, and self improvement. I also have a newsletter (https://peterelbaum.com/subscribe) and tweet my thoughts on money, work, and being a great dev. Feel free to get in touch!	https://i.ytimg.com/vi/Zpvzv8Uma8Q/sddefault.jpg	2023-02-13 12:27:55.055996	\N	\N
31	1	https://www.youtube.com/watch?v=MfIoAG3e7p4	Advanced React Patterns, Performance, Environment and Testing | New Course Launch 🎉	Hey guys! This is the free preview of the Advanced React - Patterns, Performance, Environment, and Testing course from codedamn. Hope you enjoy it. For the full course, use the link below:\n\nFull course link: https://codedamn.com/learn/advanced-react-concepts\nBecome a codedamn leet member and get instant access (10% subscriber discount!): https://codedamn.com/pricing?code=CODEDAMN_SUBSCRIBER\n\n00:00  Start\n00:55  Setting Common Props\n07:28  State Machine (Introduction)\n14:47  State Machine (Fetch Example)\n22:29  Compound Components (Checkbox Example) - Introduction\n26:07  Compound Components (Checkbox Example) - Implementation\n36:12  Compound Components (Checkbox Example) - Restricting other DOM Elements\n43:20  Compound Components (Checkbox Example) - Handling use of sub-elements separately\n49:32  Flexible Compound Components (Checkbox Example)\n56:45  Outro\n\nIf you found the video valuable, please leave a like and subscribe ❤️ It helps the channel grow and helps me pumping out more such content.\n\nAbout Me:\nI'm a CSE'21 graduate from BITS Pilani, Goa. I started coding early in life, at the age of 13 when I created my first blog on Blogger. I am listed in Google, Microsoft, Sony, eSet, etc. Hall of Fame for reporting vulnerabilities in their systems.\nI am Apple's WWDC'19 Scholar - visited San Fransisco and attended WWDC. Currently working on my own startup - codedamn.\nI am an author of 2 books, on JavaScript and React - https://www.amazon.in/s?k=mehul+mohan\n\nConnect with me:\n📸 Instagram: https://instagram.com/mehulmpt\n📱 Twitter: https://twitter.com/mehulmpt\n📝 LinkedIn: https://www.linkedin.com/in/mehulmpt\n👻 Snapchat: https://www.snapchat.com/add/mehulmpt\n📂 GitHub: https://github.com/mehulmpt\n🌎 Personal website: https://mehulmohan.com\n💻 Learn to code: https://codedamn.com\n\nCheck out my other personal YouTube channel (it is in Hindi/English mix) where I share coding tips, tricks, and hacks: https://www.youtube.com/channel/UCzF68Hu6AqrqX_p-HHwZDqg	https://i.ytimg.com/vi/MfIoAG3e7p4/sddefault.jpg	2023-02-13 12:28:18.775681	\N	\N
32	1	https://www.youtube.com/watch?v=xa-_FIy2NgE&list=PLzlkf6Y3hMLCBEy7SJPUVPKoCXZ-m78IQ	6 Pro Tips from React Developers	New to React? Learn from the success—and failures—of React developers who’ve learned valuable lessons about the library. Here are 6 Tips from Pro React Developers.\n\nSince creating this video in 2017, we transitioned to teaching Vue.js. Explore our library of courses here: https://www.vuemastery.com/courses\n\n0:00 6 pro tips\n0:14 1 - Use functional components\n0:55 2 - Keep your components small\n2:11 3 - Understand how to handle 'this'\n3:57 4 - Use a function in 'setState'\n4:35 5 - Utilize prop-types\n5:07 6 - Use React Developer tools	https://i.ytimg.com/vi/xa-_FIy2NgE/sddefault.jpg	2023-02-13 12:28:51.768057	\N	\N
33	1	https://www.youtube.com/watch?v=o3A9EvMspig&list=PLzlkf6Y3hMLCBEy7SJPUVPKoCXZ-m78IQ&index=10	Understanding Generator Functions & Using Redux Saga	Learn more advanced front-end and full-stack development at: https://www.fullstackacademy.com\n\nIn the first half of the video, Omer walks us through generator functions and their use cases. He discusses how generator functions can be paused and re-started, how to use the yield keyword, and how to iterate through a generator function with example code.\n\nIn the second half, Omer discusses a redux middleware library known as redux-saga, which takes advantage of generator functions. He helps us understand the main benefits of using redux-saga, which include a synchronous looking workflow, complex layering of actions, and isolation of side effects.	https://i.ytimg.com/vi/o3A9EvMspig/sddefault.jpg	2023-02-13 12:29:23.401323	\N	\N
34	1	https://www.youtube.com/watch?v=A71aqufiNtQ&list=PLzlkf6Y3hMLCBEy7SJPUVPKoCXZ-m78IQ&index=12	React JS Crash Course	UPDATED VERSION (2019): https://www.youtube.com/watch?v=sBws8MSXN7A\n\nIn this video we will cover the fundamentals for React.js including the following...\n\nCreate-react-app CLI\nReactJS Components\nState & Properties\nEvent Handling\nJSX - JavaScript Syntax Extension\nLifecycle Methods\nHTTP Requests\n\nCODE - https://github.com/bradtraversy/projectmanager\n\nREACT FRONT TO BACK FULL COURSE: $9.99 PROMO LINK\nhttps://www.udemy.com/react-front-to-back/?couponCode=TRAVERSYMEDIA	https://i.ytimg.com/vi/A71aqufiNtQ/sddefault.jpg	2023-02-13 12:29:44.893683	\N	\N
37	1	https://www.youtube.com/watch?v=wnYKH2dO620	Javascript Interview Prep Course 2022	► Full Javascript Interview Prep Course - https://monsterlessons-academy.com/courses/javascript-interview-questions-coding-interview\n\nThis course is great preparation for any javascript programming interviews that you may have coming up. Programming interviews need a lot amount of knowledge, but the best way to prepare for interviews is a lot of practice! In this course you will complete 59 javascript interview questions that come from real javascript interviews. There are no excersises that nobody asks here. In every question we will get a task first, then you will try to solve each problem yourself, and then I will show you different solutions to each problem step-by-step for different programmer levels. We will take a deep dive into the skills, concepts, and techniques that are required to solve each problem.\n\n\nTIMESTAMPS\n0:00 Introduction\n0:32 Types of interviews\n2:05 Interview & Work are different\n3:09 Mapping users to get usernames\n12:55 Null vs undefined\n15:32 Hoisting\n20:20 Closures\n26:29 Currying\n39:28 Adding elements to the array\n43:27 Concatenating arrays\n46:47 Check if user exists\n51:17 Duplicates in the array\n55:49 Sorting the array\n59:58 Interview is not what you think\n\n► CHECK MY COURSES - https://monsterlessons-academy.com/courses\n\nFOLLOW ME\n► TWITTER - https://twitter.com/monster_lessons\n\nRECOMMENDED VIDEOS\n► My editor setup for web development - https://youtu.be/YrLiugDhCuk\n► Angular Tutorial for Beginners - https://youtu.be/Pd98NIR63cU\n► Vue JS Crash Course - https://youtu.be/89z5opT_3so\n► React Hooks Full Course  - https://youtu.be/h7RC-aVmPqE\n► Typescript Course for Beginners - https://youtu.be/RXZoCljqYOE\n► Build a Todo App with Angular - https://youtu.be/uyTC0Skvvls\n► Creating custom select library - https://youtu.be/jZDWjMh32E0\n► HTML Price comparison - https://youtu.be/D6r6yYIw5uc\n► How to build Quiz with React hooks - https://youtu.be/lI_ReTTUFU0\n\nMY COURSES\n► NestJS course - https://youtu.be/MNa-h_uPNmw\n► Docker + Docker compose course - https://youtu.be/tPMk5UCvucM\n► Angular + NgRx course - https://youtu.be/DyklxnC2XP0\n► Vue + Vuex course - https://youtu.be/RjNA1v7OuUs\n► React hooks course - https://youtu.be/nC8JPlimn8E	https://i.ytimg.com/vi/wnYKH2dO620/sddefault.jpg	2023-02-13 12:39:08.742685	\N	\N
38	1	https://www.youtube.com/watch?v=1LkOa7Ky2ak	Why React.js is taking a new direction	React.js is super popular. Like ... really, extremely popular.\nBut it's also changing. Slowly but steadily. Not alone but instead with its entire ecosystem.\n\nLearn all about React with my bestselling course: https://acad.link/reactjs\nOr with my brand-new book: https://www.amazon.com/React-Key-Concepts-Consolidate-knowledge-ebook/dp/B0B3XRRYHN\nBuild fullstack React apps with NextJS: https://acad.link/nextjs\nBuild fullstack React apps with Remix: https://acad.link/remix\n\nJoin our Academind Community on Discord: https://academind.com/community\n\nCheck out all our other courses: https://academind.com/courses\n\n----------\n\n• Go to https://www.academind.com and subscribe to our newsletter to stay updated and to get exclusive content & discounts\n• Follow @maxedapps and @academind_real on Twitter\n• Follow @academind_real on Instagram: https://www.instagram.com/academind_real\n• Join our Facebook community on https://www.facebook.com/academindchannel/\n\nSee you in the videos!\n\n----------\n\nAcademind is your source for online education in the areas of web development, frontend web development, backend web development, programming, coding and data science! No matter if you are looking for a tutorial, a course, a crash course, an introduction, an online tutorial or any related video, we try our best to offer you the content you are looking for. Our topics include Angular, React, Vue, Html, CSS, JavaScript, TypeScript, Redux, Nuxt.js, RxJs, Bootstrap, Laravel, Node.js, Progressive Web Apps (PWA), Ionic, React Native, Regular Expressions (RegEx), Stencil, Power BI, Amazon Web Services (AWS), Firebase or other topics, make sure to have a look at this channel or at academind.com to find the learning resource of your choice!	https://i.ytimg.com/vi/1LkOa7Ky2ak/sddefault.jpg	2023-02-13 12:39:53.501873	\N	\N
39	1	https://www.youtube.com/watch?v=fmyvWz5TUWg	Learn Ruby on Rails - Full Course	Learn Ruby on Rails in this full course for beginners. Ruby on Rails is a is a server-side web application framework used for creating full stack web apps.\n\n🔗 Code: https://github.com/flatplanet/railsfriends\n\n🎥 Course created by Codemy.com. Check out their YouTube channel: https://www.youtube.com/c/Codemycom\n\n⭐️ Course Contents ⭐️\n⌨️ (0:00:00) Introduction and Installation\n⌨️ (0:28:12) First Webpage and MVC Overview\n⌨️ (0:42:41) Application Partial Links and New Pages\n⌨️ (1:03:17) CRUD Scaffold\n⌨️ (1:21:33) Style App with Bootstrap\n⌨️ (2:02:15) Style Devise Views\n⌨️ (2:26:39) Associations\n⌨️ (2:45:41) More Associations\n⌨️ (3:06:34) Style Modifications\n⌨️ (3:21:57) Fun With the Controller\n⌨️ (3:30:17) Git, GitHub, and Heroku\n\n⭐️ Special thanks to our Champion supporters! ⭐️ \n🏆 Loc Do\n🏆 Joseph C\n🏆 DeezMaster\n\n--\n\nLearn to code for free and get a developer job: https://www.freecodecamp.org\n\nRead hundreds of articles on programming: https://freecodecamp.org/news	https://i.ytimg.com/vi/fmyvWz5TUWg/sddefault.jpg	2023-02-13 12:40:33.952004	\N	\N
40	1	https://www.youtube.com/watch?v=DRi2snGMOY8	Filtering Data with ChartKick & Stimulus - Ruby on Rails Tutorial	I've been using Chartkick for years, but upgrading to Rails 7 made me take a look at how I'd been trapping Chartkick events and upgrade it to work with Stimulus. I am talking about trapping the clicking on a chart and using it as a kind of filter for the associated data.\n\n00:00 Intro\n00:30 App setup\n01:30 Install ChartKick\n04:20 Sample Chart\n06:00 Creating a model\n07:15 Seed data with ChatGPT\n11:30 Model Views\n16:30 Old Way - pure Javascript\n22:50 New Way - Stimulus.js\n23:00 Create Stimulus Controller\n23:30 Edit the view\n25:30 Edit the Stimulus Controller\n30:30 Filter the data\n33:30 Fetching the data\n41:35 Set the Stimulus Controller Target\n44:20 Recap\n\nFor a detailed article (i.e. transcript with source code kind of thing) you can look at my Substack: https://philonrails.substack.com/\n\nSome people online just talk - I just do. One of my major SaaS products out there is Zonmaster.com (https://public.zonmaster.com) THE AutoResponder and Customer Management tool for Amazon Sellers. Join over 17,000 other Amazon Sellers and sign up today!\n\nLooking for great hosting? I've been using DigitalOcean for 7 years and they have never let me down. Amazing.\nCheck them out here https://m.do.co/c/f1c6edf8597f and get $100(!!!) free credits towards the cost of servers.\n\n#techEntrepreneur #entrepreneurship #softwareDevelopment	https://i.ytimg.com/vi/DRi2snGMOY8/sddefault.jpg	2023-02-13 12:42:52.579556	\N	\N
36	1	https://www.youtube.com/watch?v=pSdp92Up8O8&list=PLzlkf6Y3hMLCBEy7SJPUVPKoCXZ-m78IQ&index=16	Front End Center — Single Responsibility Components: Object-Oriented Design in React	The Functional Programming (FP) aspects of React are fairly prominent, but components themselves are an example of Object-Oriented (OO) programming. In this episode, we'll look at how one idea from OO—The Single Responsibility Principle—can help us design and extract more readable, reusable, and maintainable React components.\n\nThanks to Lookahead Search https://www.lookahead.com.au for making this episode available!\n\nFront End Center is a premium screencast series on all aspects of front-end web development. Subscribe now to get access to all episodes: https://frontend.center	https://i.ytimg.com/vi/pSdp92Up8O8/sddefault.jpg	2023-02-13 12:30:46.930917	\N	2023-02-13 15:06:28.919213
61	25	https://www.youtube.com/watch?v=l4ANg098TlI	Pro VSCode Tricks	This video has been a long time in the making. One that many people have been asking me to make for months. The video that I've teased and talked about and promised would eventually get made.\n\nGuess what. Here it is.\n\nThis is a compilation of all my Pro VSCode Tricks that make me super efficient when using VSCode.\n\nHave a watch, have a second watch, have a third watch. There's a lot to unpack in here!\n\nIf you want to read this in written form check out the blog post!\n\nhttps://hswolff.com/blog/pro-vscode-tricks/\n\n——\n\nPATREON: https://www.patreon.com/hswolff\n\nTWITTER: https://twitter.com/hswolff\n\nSITE: https://hswolff.com/\n\nNEWSLETTER: https://tinyletter.com/hswolff/subscribe	https://i.ytimg.com/vi/l4ANg098TlI/sddefault.jpg	2023-02-13 16:50:16.754735	\N	\N
41	1	https://www.youtube.com/watch?v=MJSZ3WcgHeE	Debugging Rails	Sometimes (read: always) you will need to debug your Ruby on Rails application. In this video I cover some of the gems and methods you can use to do that!\n\n00:00 Introduction\n01:35 Logging & Customer Loggers\n07:58 Debug on webpage\n11:40 Marginalia Gem\n16:40 Memory & Profiling\n22:40 Byebug\n26:08 Web Console\n28:00 Ngrok Web Console gotcha\n\nGet the Gist with all the links etc: https://gist.github.com/philsmy/e5de9b16279300f30ae8a6286ce05fdb\n\nSome people online just talk - I just do. One of my major SaaS products out there is Zonmaster.com (https://public.zonmaster.com) THE AutoResponder and Customer Management tool for Amazon Sellers. Join over 17,000 other Amazon Sellers and sign up today!\n\nLooking for great hosting? I've been using DigitalOcean for 7 years and they have never let me down. Amazing.\nCheck them out here https://m.do.co/c/f1c6edf8597f and get $100(!!!) free credits towards the cost of servers.\n\n#rubyOnRails #entrepreneurship #softwareDevelopment	https://i.ytimg.com/vi/MJSZ3WcgHeE/sddefault.jpg	2023-02-13 12:43:48.636726	\N	\N
42	1	https://www.youtube.com/watch?v=G63BRtGLcw4	The Factory Method Pattern in Ruby	The Factory Method Pattern might be somewhat hard to understand at first, mainly because you probably don't need it as often. Nevertheless, it's good to know about it and use it whenever you feel it's appropriate.\n\n👉  Buy my Bulletproof Ruby on Rails Applications eBook: https://j.mp/2OtFCdR\n\n🍿  The Abstract Factory Pattern: https://youtu.be/MVYlbbk_Fag\n\n🍿  Ruby design patterns playlist: https://youtube.com/playlist?list=PLBhH0uX92r6oP8r-oSY_b8_2EnK0Z1Fkz\n\nYou can subscribe to the channel using this link: https://www.youtube.com/mixandgo?sub_confirmation=1\n\nRead it instead: https://mixandgo.com/learn/ruby/factory-method-pattern\n\nMy website: https://mixandgo.com\n\nhttps://en.wikipedia.org/wiki/Factory_method_pattern\n\nIf you want to learn more about design patterns, check out these two books.\n\n📖  Design Patterns: Elements of Reusable Object-Oriented Software: https://amzn.to/3vZ7sjp\n\n📖  Head First Design Patterns: Building Extensible and Maintainable Object-Oriented Software 2nd Edition: https://amzn.to/3bvBiCF\n\n\n#webdev #ruby #designpatterns #factorymethod	https://i.ytimg.com/vi/G63BRtGLcw4/sddefault.jpg	2023-02-13 12:44:13.245903	\N	\N
43	1	https://www.youtube.com/watch?v=hQAHSlTtcmY	Learn React In 30 Minutes	🚨 IMPORTANT:\n\nFull React Course: https://courses.webdevsimplified.com/learn-react-today\n\nIn this video I will be covering all of the basics of React in only 30 minutes. We will cover create-react-app, components, state, props, rendering, event handling, and so much more. By the end of this video you will have a full understanding of the basics of React, but if you want to take your React knowledge to the next level checkout my full React course linked above for the best React learning experience on the web.\n\n\n📚 Materials/References:\n\nHow To Install Node.js: https://youtu.be/VShtPwEkDD0\nDestructoring Video: https://youtu.be/NIq3qLaHCIs\nGitHub Code: https://github.com/WebDevSimplified/Learn-React-In-30-Minutes\n\n\n🧠 Concepts Covered:\n\n- React function components\n- React hooks\n- State management in React\n- Prop drilling\n- How to use create-react-app\n\n\n🌎 Find Me Here:\n\nMy Courses: https://courses.webdevsimplified.com\nPatreon: https://www.patreon.com/WebDevSimplified\nTwitter: https://twitter.com/DevSimplified\nDiscord: https://discord.gg/7StTjnR\nGitHub: https://github.com/WebDevSimplified\nCodePen: https://codepen.io/WebDevSimplified\n\n\n#Reactjs #WDS #JavaScript	https://i.ytimg.com/vi/hQAHSlTtcmY/sddefault.jpg	2023-02-13 12:54:01.00222	\N	\N
44	1	https://www.youtube.com/watch?v=Ma6DRDIedVE&list=PLzMcBGfZo4-nRV61oEu3KfMwWKI571uPT&index=1	React For Beginners #1 - Introduction & Environment Setup	Welcome to a new tutorial series on React. React is a web framework that uses Javascript. It was created and is maintained by Facebook with the library being open source. React is super popular and good to know in 2021 to make more advanced websites.\n\n💻 AlgoExpert is the coding interview prep platform that I used to ace my Microsoft and Shopify interviews. Check it out and get a discount on the platform using the code "techwithtim" https://algoexpert.io/techwithtim \n\n🔍 Playlist: https://www.youtube.com/playlist?list=PLzMcBGfZo4-nRV61oEu3KfMwWKI571uPT\n\n📄 Resources 📄\nJavaScript for Beginners: https://www.youtube.com/watch?v=ykoxwrm0Seo\nInstall NodeJS: https://nodejs.org/en/\nInstall VSCode: https://code.visualstudio.com/download\nInstall React Web Tools: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en\n\n⭐️ Timestamps ⭐️\n00:00 | Series Information & Overview\n02:09 | Dependency Installation\n02:53 | VSCode Setup\n04:48 | Create-React-App\n06:52 | Running React Development Server\n08:23 | Modifying The Starting Code\n09:29 | React Web Dev Tools\n10:32 | Conclusion\n\n◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️\n💰 Courses & Merch 💰 \n💻 The Fundamentals of Programming w/ Python: https://tech-with-tim.teachable.com/p/the-fundamentals-of-programming-with-python \n👕 Merchandise: https://teespring.com/stores/tech-with-tim-merch-shop \n\n	https://i.ytimg.com/vi/Ma6DRDIedVE/sddefault.jpg	2023-02-13 12:54:52.416009	\N	\N
45	1	https://www.youtube.com/watch?v=vMeR1aaNhtk&list=PLzMcBGfZo4-nRV61oEu3KfMwWKI571uPT&index=5	React for Beginners #5 - State & useState	Welcome back to another React tutorial! In this video, I will be covering State. State is data that your app is holding and tracks and in our case, we'll be implementing State into our components.\n\n💻 AlgoExpert is the coding interview prep platform that I used to ace my Microsoft and Shopify interviews. Check it out and get a discount on the platform using the code "techwithtim" https://algoexpert.io/techwithtim \n\n🔍 Playlist: https://www.youtube.com/playlist?list=PLzMcBGfZo4-nRV61oEu3KfMwWKI571uPT\n\n⭐️ Timestamps ⭐️\n00:00 | Introduction\n00:18 | What is State?\n01:27 | Functional Component State\n09:50 | Passing State to Child Components\n13:10 | Class Based Component State\n	https://i.ytimg.com/vi/vMeR1aaNhtk/sddefault.jpg	2023-02-13 12:55:29.840348	\N	\N
46	1	https://www.youtube.com/watch?v=NQ5i1kJAA6Y&list=RDCMUC4JX40jDee_tINbkjycV4Sg&index=4	The Best Python Project For Beginners! (Full Tutorial)	Welcome back to another video! In this tutorial I will be showing you how to create an awesome typing speed test for beginners! This python project is amazing for beginners and will teach you tons :)\n\n💻 Thanks to Altium Designer for sponsoring this video. Checkout the best PCB design software on the market by signing up for a FREE trial here: https://www.altium.com/yt/techwithtim \n\n📄 Resources 📄\nDownload This Code: https://github.com/techwithtim/WPM_Typing_Test\nCurses Documentation: https://docs.python.org/3/howto/curses.html\n\nFix Pip (Windows): https://www.youtube.com/watch?v=AdUZArA-kZw&t=204s\nFix Pip (Mac): https://www.youtube.com/watch?v=E-WhAS6qzsU\n\n⭐️ Timestamps ⭐️\n00:00 | Project Overview\n01:32 | Project Demo\n03:33 | Curse Module Setup\n05:21 | Curse Module Walkthrough\n11:17 | Styling The Terminal\n16:18 | Getting User Key Presses\n31:07 | Overlaying Text\n41:07 | Calculating WPM\n49:08 | Ending The Game\n54:24 | Randomized Text\n\n◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️\n💰 Courses & Merch 💰 \n💻 The Fundamentals of Programming w/ Python: https://tech-with-tim.teachable.com/p/the-fundamentals-of-programming-with-python \n👕 Merchandise: https://teespring.com/stores/tech-with-tim-merch-shop \n\n🔗 Social Medias 🔗 \n📸 Instagram: https://www.instagram.com/tech_with_tim \n📱 Twitter: https://twitter.com/TechWithTimm \n⭐ Discord: https://discord.gg/twt\n📝 LinkedIn: https://www.linkedin.com/in/tim-ruscica-82631b179/ \n🌎 Website: https://techwithtim.net \n📂 GitHub: https://github.com/techwithtim \n🔊 Podcast: https://anchor.fm/tech-with-tim \n\n🎬 My YouTube Gear 🎬 \n🎥 Main Camera (EOS Canon 90D): https://amzn.to/3cY23y9 \n🎥 Secondary Camera (Panasonic Lumix G7): https://amzn.to/3fl2iEV \n📹 Main Lens (EFS 24mm f/2.8): https://amzn.to/2Yuol5r \n🕹 Tripod: https://amzn.to/3hpSprv \n🎤 Main Microphone (Rode NT1): https://amzn.to/2HrZxXc\n🎤 Secondary Microphone (Synco Wireless Lapel System): https://amzn.to/3e07Swl \n🎤 Third Microphone (Rode NTG4+): https://amzn.to/3oi0v8Z\n☀️ Lights: https://amzn.to/2ApeiXr \n⌨ Keyboard (Daskeyboard 4Q): https://amzn.to/2YpN5vm \n🖱 Mouse (Logitech MX Master): https://amzn.to/2HsmRDN\n📸 Webcam (Logitech 1080p Pro): https://amzn.to/2B2IXcQ \n📢 Speaker (Beats Pill): https://amzn.to/2XYc5ef \n🎧 Headphones (Bose Quiet Comfort 35): https://amzn.to/2MWbl3e \n🌞 Lamp (BenQ E-reading Lamp): https://amzn.to/3e0UCr8 \n🌞 Secondary Lamp (BenQ Screenbar Plus): https://amzn.to/30Dtafi \n💻 Monitor (BenQ EX2780Q): https://amzn.to/2HsmUPZ\n💻 Monitor (LG Ultrawide 34WN750): https://amzn.to/3dSD7tS\n🎙 Mic Boom Arm (Rode PSA 1): https://amzn.to/30EZw9m \n🎚 Audio Interface (Focusrite Scarlet 4i4): https://amzn.to/2TjXsih\n\n💸 Donations 💸 \n💵 One-Time Donations: https://www.paypal.com/donate?hosted_button_id=CU9FV329ADNT8\n💰 Patreon: https://www.patreon.com/techwithtim\n◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️\n\n⭐️ Tags ⭐️\n-Tech With Tim\n-Python For Beginners\n-Python Project\n-Python Tutorial\n-Typing Test\n\n⭐️ Hashtags ⭐️\n#TechWithTim #PythonProject #BeginnerProgram	https://i.ytimg.com/vi/NQ5i1kJAA6Y/sddefault.jpg	2023-02-13 12:56:25.400672	\N	\N
59	25	https://www.youtube.com/watch?v=IIDuE0dnXlo	How to Become a Full Stack Developer | Full Stack Developer Roadmap 2021	In this video, I talk about how to become a full stack developer in 2021 right from the basics of learning HTML to React to learning about servers, databases, and cloud. This is the complete full stack developer roadmap you can follow to learn both frontend and backend technologies.\n\nLearn Full Stack Development by building over 25 Projects: https://cdm.sh/fullstack\n\nTimestamps\n0:00 video starts\n0:15 - What is a Full Stack Development\n1:18 - Why do you want to become a Full Stack Developer\n2:39 - How do you become a Full Stack Developer\n2:56 - 1. Internet Fundamentals\n3:57 - 2. HTML & CSS Fundamentals\n5:48 - 3. JavaScript\n6:34 - 4. Chrome Dev Tools\n7:58 - 5. Version Control System (Git and GitHub)\n8:55 - 6. Package Managers: NPM/Yarn\n10:11 - 7. Javascript Framework: React JS\n12:53 - 8. Testing \n13:45 - 9. Linux Fundamentals\n14:58 - 10. Backend Programming Language: Node JS\n16:53 - 11. Database: SQL and NoSQL\n18:16 - 12. Web Security\n19:00 - 13. CI / CD\n19:41 - 14. Caching\n20:14 - 15. Cloud Service Provider\n21:37 - Full-Stack Web Development course on codedamn\n23:34 - Outro\n	https://i.ytimg.com/vi/IIDuE0dnXlo/sddefault.jpg	2023-02-13 16:49:13.830911	\N	\N
47	1	https://www.youtube.com/watch?v=59IXY5IDrBA	React Router 6 – Tutorial for Beginners	Learn how to use React Router V6 in this crash course for beginners. React Router is the most popular way to add page routing in React Apps. It is used very frequently in React projects.\n\n✏️ John Smilga from Coding Addict created this course. Check out his channel: https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA\n\n💻 Source Code: https://github.com/john-smilga/react-router-6-tutorial\n\n🔗 React Tutorial: https://www.youtube.com/watch?v=bMknfKXIFA8\n🔗 React Projects: https://www.youtube.com/watch?v=a_7Z7C_JCyo\n\n⭐️ Course Contents ⭐️\n⌨️ (0:00:00) First Pages\n⌨️ (0:11:01) Page Components\n⌨️ (0:15:47) Link Component\n⌨️ (0:19:39) Error Page\n⌨️ (0:22:39) Navbar\n⌨️ (0:24:39) Nested Routes\n⌨️ (0:29:39) Shared Layout\n⌨️ (0:35:58) Index Pages\n⌨️ (0:41:43) NavLink Component\n⌨️ (0:49:02) URL Params\n⌨️ (0:55:56) Single Product\n⌨️ (1:01:36) useNavigate()\n⌨️ (1:09:49) Protected Route\n⌨️ (1:13:52) Refactor\n\n🎉 Thanks to our Champion and Sponsor supporters:\n👾 Raymond Odero\n👾 Agustín Kussrow\n👾 aldo ferretti\n👾 Otis Morgan\n👾 DeezMaster\n\n--\n\nLearn to code for free and get a developer job: https://www.freecodecamp.org\n\nRead hundreds of articles on programming: https://freecodecamp.org/news	https://i.ytimg.com/vi/59IXY5IDrBA/sddefault.jpg	2023-02-13 13:14:49.866143	\N	\N
48	25	https://www.youtube.com/watch?v=lWu5zf_S9R4	How to write Semantic CSS	Most people know about semantic HTML, but when it comes to CSS, things are a little more wishy-washy most of the time. Rather than relying on arbitrary class names, we can use different semantic selectors though!\n\n🔗 Links \n ✅ Ben Myers article on Semantic CSS: https://benmyers.dev/blog/semantic-selectors/\n✅ Using CSS to Enforce Accessibiliity by Adrian Roselli: https://adrianroselli.com/2021/06/using-css-to-enforce-accessibility.html\n✅ User Facing State by Scott O’Hara: https://css-tricks.com/user-facing-state/\n✅ Semantic CSS with Intelligent Selectors by Heydon Pickering: https://www.smashingmagazine.com/2013/08/semantic-css-with-intelligent-selectors/\n✅ Teaching my 11-year-old HTML & CSS: https://youtu.be/o2FVxF2471k\n\n⌚ Timestamps\n00:00 - Introduction\n00:16 - The problem with class names\n01:36 - How we can write semantic CSS with a navigation\n05:42 - Hamburger menu & tab examples\n07:00 - How to find the appropriate aria and role attributes\n\n#css\n\n--\n\nCome hang out with other dev's in my Discord Community\n💬 https://discord.gg/nTYCvrK\n\nKeep up to date with everything I'm up to\n✉ https://www.kevinpowell.co/newsletter\n\nCome hang out with me live every Monday on Twitch!\n📺 https://www.twitch.tv/kevinpowellcss\n\n---\n\nHelp support my channel\n👨‍🎓 Get a course: https://www.kevinpowell.co/courses\n👕 Buy a shirt: https://teespring.com/stores/making-the-internet-awesome\n💖 Support me on Patreon: https://www.patreon.com/kevinpowell\n\n---\n\nMy editor: VS Code - https://code.visualstudio.com/\n\n---\n\nI'm on some other places on the internet too!\n\nIf you'd like a behind the scenes and previews of what's coming up on my YouTube channel, make sure to follow me on Instagram and Twitter.\n\nTwitter: https://twitter.com/KevinJPowell\nCodepen: https://codepen.io/kevinpowell/\nGithub: https://github.com/kevin-powell\n\n---\n\nAnd whatever you do, don't forget to keep on making your corner of the internet just a little bit more awesome!	https://i.ytimg.com/vi/lWu5zf_S9R4/sddefault.jpg	2023-02-13 16:05:29.417625	\N	\N
49	25	https://www.youtube.com/watch?v=AbCTlemwZ1k	I Don't Need Postman Anymore!! I Use VS Code Instead...	I've completely replaced the need for Postman with this one extension in VS Code! The Thunder Client extension for VS Code can do everything I need to when testing HTTP Requests.\n\n- create and send requests\n- group requests into collections\n- use variables\n- much more!\n\nThunder Client - https://www.producthunt.com/posts/thunder-client\n_____________________________________________\n\nNewsletter 🗞\nInterested in exclusive content and discounts? 🤯 Sign up for the newsletter!\nhttps://www.jamesqquick.com\n_____________________________________________\n\nConnect with me 😀\nLive streams on Twitch - https://twitch.tv/jamesqquick\nFollow me on Twitter - https://www.twitter.com/jamesqquick\nJoin the 💬 Discord Server 💬 - https://discord.gg/vM2bagU\n_____________________________________________\n\nCOURSES  💻\nLearn how to build Fullstack apps with React and Serverless Functions - https://www.jamesqquick.com/courses/react-and-serverless-fullstack-developmnent\nLearn everything you need to know about Visual Studio Code - https://www.udemy.com/learn-visual-studio-code/\nBuild a Quiz App  - https://www.udemy.com/build-a-quiz-app-with-html-css-and-javascript/	https://i.ytimg.com/vi/AbCTlemwZ1k/sddefault.jpg	2023-02-13 16:09:38.144684	\N	\N
50	25	https://www.youtube.com/watch?v=gtfZUnUOgKE	6 Months of Learning JavaScript Game Dev in 6 Minutes	In this video, we go over my 6-month journey of learning game development in JavaScript. Initially, I talk about why I decided to learn game development in the first place. Then, we dive into my reasoning for choosing Three.js over a game engine like Unity or Unreal. Finally, we take a look at the 10 game dev experiments I made in this 6 month period.\n\n🐦  Twitter - https://twitter.com/SuboptimalEng\n💻  GitHub - https://github.com/SuboptimalEng\n🌎  Website - https://suboptimaleng.com\n\n== [ Timestamps ] ==\n00:00 Why Learn Game Dev?\n00:43 Three.js vs Unity Game Engine\n01:37 Solar System Demo\n01:54 Tic-Tac-Toe Game\n02:16 3D Tic-Tac-Toe Cube\n02:37 3D Audio Waveform Visualizer\n03:13 Naruto’s Rasengan\n03:30 3D Piano\n03:55 3D Wordle Clone\n04:16 Rubik’s Cube\n05:02 Retro Snake 3D\n05:40 Frantic Architect Clone\n\n== [ Credits ] ==\nSimon Dev - https://twitter.com/iced_coffee_dev\n\nCaterina Zamai - https://www.artstation.com/zaccate\nHand Anatomy by Caterina Zamai - https://sketchfab.com/3d-models/hand-anatomy-ada8498be9754e9f90b2eecc1b4ef8c5\n\nJames Harness - https://sketchfab.com/James.Harness\nCRT Monitor by James Harness - https://sketchfab.com/3d-models/crt-monitor-e2dd2887a8904e4fa3d5a32e2935adb9\n\nWill Kwan - https://twitter.com/_willkwan\nFrantic Architect - https://github.com/wkwan/frantic-architect\n\n== [ Resources ] ==\nThree.js - https://threejs.org\nThree.js Tutorials - https://sbcode.net/threejs\nCannon.js - https://github.com/pmndrs/cannon-es\n\n== [ Tags ] == \n#suboptimal #javascript #gamedev	https://i.ytimg.com/vi/gtfZUnUOgKE/sddefault.jpg	2023-02-13 16:20:59.007981	\N	\N
51	25	https://www.youtube.com/watch?v=ORrELERGIHs	VSCode Tutorial For Beginners - Getting Started With VSCode	In this VSCode tutorial for beginners I'll be showing you everything you need to know as a beginner about how to use Visual Studio Code! I'll be demonstrating all of the important functionality of VSCode that you need to know to be as efficient as possible. This tutorial is designed for someone who's never used VSCode before, but is still informational for novice users. \n\n💻 AlgoExpert is the coding interview prep platform that I used to ace my Microsoft and Shopify interviews. Check it out and get a discount on the platform using the code "techwithtim" https://algoexpert.io/techwithtim \n\n📄 Resources\nDownload VsCode: https://code.visualstudio.com/\nDebugger Tutorial: https://www.youtube.com/watch?v=7qZBwhSlfOo\nDjango & React Full Stack Web App: https://www.youtube.com/watch?v=JD-age0BPVo\n\n⭐️ Timestamps ⭐️\n00:00 | Introduction To VSCode \n02:25 | Opening & Creating Project\n04:40 | File/Project Explorer\n06:05 | VSCode Terminal\n08:47 | Full-Screen Mode\n09:15 | Extensions\n10:58 | Searching / Find & Replace\n12:53 | Editor Tricks and Tips\n15:35 | Changing Color Preference/Theme\n17:25 | File Finder\n17:46 | Settings & Font Size\n18:20 | Running/Executing Files\n19:10 | Git/GitHub Tools\n20:34 | Debugging\n21:59 | Zen Mode and Other Features\n	https://i.ytimg.com/vi/ORrELERGIHs/sddefault.jpg	2023-02-13 16:43:40.078822	\N	\N
52	25	https://www.youtube.com/watch?v=H2gvHxC9gFY	My Visual Studio Code Setup for Web Development	Thanks to Mailgun for sponsoring this video! Head to https://mailgun.com/forrestknight to try Mailgun today.\n\nLearn to Code with Coursera Plus (7-Day Free Trial): https://imp.i384100.net/Ke61De\n\nMy focus lately as a developer has been building websites & web apps, and VS Code is the main tool I use to get that done. It's the most popular IDE/code editor among developers, according to the 2022 Stack Overflow Developer Survey. So, I want to show you how I use VS Code, my preferred extensions, my current theme, and my favorite VS Code settings that I’ve been using for many different types of web development.\n\n------------------------\n\n🐱‍🚀 GitHub: https://github.com/forrestknight\n🎥 Twitch: https://www.twitch.tv/forrestknight\n🐦 Twitter: https://www.twitter.com/forrestpknight\n📸 Instagram: https://www.instagram.com/forrestpknight\n \n📓 Learning Resources: \nMy Favorite Machine Learning Course:  https://imp.i384100.net/YgYEBJ\nOpen Source Computer Science Degree:  https://bit.ly/open-source-forrest\nPython Open Source Computer Science Degree:  https://bit.ly/python-open-source\nUdacity to Learn Any Coding Skill: http://bit.ly/udacity-forrest\n\n👨‍💻 My Coding Gear:\nMy NAS Server: https://amzn.to/3brqO7b\nMy Hard Drives: https://amzn.to/3aKetMi\nMy Main Monitor: https://amzn.to/3siQfPa\nMy Second Monitor: https://amzn.to/3keHT84\nMy Standing Desk: https://amzn.to/3boAcbC\nMy PC Build:  https://bit.ly/my-coding-gear\nMy AI GPU: https://amzn.to/3uvmUmz\n\n🔧Coding Tools:\nThe Best Linux Server Hosting: https://bit.ly/linode-forrest	https://i.ytimg.com/vi/H2gvHxC9gFY/sddefault.jpg	2023-02-13 16:44:19.941794	\N	\N
53	25	https://www.youtube.com/watch?v=tUUI5hKw0DQ	Ranking the BEST VS Code Themes	Hey guys! IDE themes are important, especially if you're going to spend a long time looking at your code. But what are the best themes in VS Code? That's what we're going to find out in this video, enjoy!\n\n► Themes Link (in order of ranking)\nhttps://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode\nhttps://marketplace.visualstudio.com/items?itemName=arcticicestudio.nord-visual-studio-code\nhttps://marketplace.visualstudio.com/items?itemName=mcagampan.dark-horizon\nhttps://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula\nhttps://marketplace.visualstudio.com/items?itemName=sdras.night-owl\nhttps://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme\nhttps://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme\nhttps://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night\nhttps://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode\nhttps://marketplace.visualstudio.com/items?itemName=sveggiani.vscode-field-lights\nhttps://marketplace.visualstudio.com/items?itemName=eyhn.vscode-vibrancy\nhttps://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme\n\n► Get In Touch\n¶ Email me at → giorgio.toffoli@proton.me\n¶ Join the Discord server → https://discord.gg/nmxGpX9hpd\n\n► My personal website → https://giorgio.toffoli.me\n\n► Music Used\n♪ EpicalDrums - Grigoriy Nuzhny\n♪ Beautiful Dream - Diego Nava\n♪ Spring In My Step - Silent Partner\n♪ Undertale OST 027 Dating Fight - Toby Fox\n♪ Undertale OST 014 Heartache - Toby Fox\n♪ Secrets - sergiuuuuu\n\n► Time Stamps\n0:00 Intro\n2:13 #12 \n2:40 #11\n3:07 #10\n3:27 #9\n3:50 #8\n4:12 #7\n4:46 #6 \n5:08 #5\n5:30 #4\n5:56 #3\n6:17 #2\n6:49 #1\n7:28 Outro\n\n#IDE #VSCode #Themes	https://i.ytimg.com/vi/tUUI5hKw0DQ/sddefault.jpg	2023-02-13 16:44:43.989196	\N	\N
54	25	https://www.youtube.com/watch?v=9EMUJm7qdxM	Visual Studio Code React Setup - 5 Tips	Want to become a better React developer? Your VS Code React setup can drastically change the way you create React apps. In this video, we'll cover 5 tips to improve your VS Code React setup to also improve your efficiency and proficiency as a React developer!\n\nReact and Serverless - bit.ly/react-and-serverless\nLearn Visual Studio Code - https://www.udemy.com/learn-visual-studio-code/\n\nGo to https://www.jamesqquick.com and subscribe to the newsletter to stay updated and to get exclusive content & discounts\n\nLive streams on Twitch - https://twitch.tv/jamesqquick\nFollow me on Twitter - https://www.twitter.com/jamesqquick	https://i.ytimg.com/vi/9EMUJm7qdxM/sddefault.jpg	2023-02-13 16:45:14.545347	\N	\N
55	25	https://www.youtube.com/watch?v=rfscVS0vtbw	Learn Python - Full Course for Beginners [Tutorial]	This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a python programmer in no time!\nWant more from Mike? He's starting a coding RPG/Bootcamp - https://simulator.dev/\n\n⭐️ Contents ⭐\n⌨️ (0:00) Introduction\n⌨️ (1:45) Installing Python & PyCharm\n⌨️ (6:40) Setup & Hello World\n⌨️ (10:23) Drawing a Shape\n⌨️ (15:06) Variables & Data Types\n⌨️ (27:03) Working With Strings\n⌨️ (38:18) Working With Numbers\n⌨️ (48:26) Getting Input From Users\n⌨️ (52:37) Building a Basic Calculator\n⌨️ (58:27) Mad Libs Game\n⌨️ (1:03:10) Lists\n⌨️ (1:10:44) List Functions\n⌨️ (1:18:57) Tuples\n⌨️ (1:24:15) Functions\n⌨️ (1:34:11) Return Statement\n⌨️ (1:40:06) If Statements\n⌨️ (1:54:07) If Statements & Comparisons\n⌨️ (2:00:37) Building a better Calculator\n⌨️ (2:07:17) Dictionaries\n⌨️ (2:14:13) While Loop\n⌨️ (2:20:21) Building a Guessing Game\n⌨️ (2:32:44) For Loops\n⌨️ (2:41:20) Exponent Function\n⌨️ (2:47:13) 2D Lists & Nested Loops\n⌨️ (2:52:41) Building a Translator\n⌨️ (3:00:18) Comments\n⌨️ (3:04:17) Try / Except\n⌨️ (3:12:41) Reading Files\n⌨️ (3:21:26) Writing to Files\n⌨️ (3:28:13) Modules & Pip\n⌨️ (3:43:56) Classes & Objects\n⌨️ (3:57:37) Building a Multiple Choice Quiz\n⌨️ (4:08:28) Object Functions\n⌨️ (4:12:37) Inheritance\n⌨️ (4:20:43) Python Interpreter\n	https://i.ytimg.com/vi/rfscVS0vtbw/sddefault.jpg	2023-02-13 16:45:54.982341	\N	\N
56	25	https://www.youtube.com/watch?v=Qi28uPKaH_A	How to Run Python Programs ( .py files ) on Windows 10 ( All Options )	In this tutorial you will learn How to run Python Programs ( .py files ) on windows 10 computer.\nWe can use Python command prompt and idle interactive interface or we can write the program in a simple text editor like notepad and execute the program using cmd.\n\nWe also can use IDLE to write the program, save it as a file and run it.\n\nDownload and install Python in Windows 10\nhttps://youtu.be/Wys0OaCGvMk\n\nour Social Media Pages\nhttps://www.facebook.com/ExampleProgram\nhttps://www.twitter.com/ExampleProgram\nhttps://www.Instagram.com/example_program\n\nOur Website\nhttps://www.ExampleProgram.com\n\n#ExampleProgram	https://i.ytimg.com/vi/Qi28uPKaH_A/sddefault.jpg	2023-02-13 16:46:23.043149	\N	\N
57	25	https://www.youtube.com/watch?v=RyRo8eVsrlU	STOP Learning These Programming Languages (for Beginners)	Stop trying to learn every programming language. In this video I'm going to tell you which languages you should avoid (if you're new to programming).\n\n📄 *** DOWNLOAD MY FREE STUDY MANUAL ***\nTo download my FREE Self-Taught Programmer Study Manual PDF go to: https://andysterkowitz.com/study-manual/	https://i.ytimg.com/vi/RyRo8eVsrlU/sddefault.jpg	2023-02-13 16:46:52.888657	\N	\N
58	25	https://www.youtube.com/watch?v=_bYFu9mBnr4	C++ Programming All-in-One Tutorial Series (10 HOURS!)	💯 FREE Courses (100+ hours) - https://calcur.tech/all-in-ones\n🐍 Python Course - https://calcur.tech/python-courses\n	https://i.ytimg.com/vi/_bYFu9mBnr4/sddefault.jpg	2023-02-13 16:48:03.603981	\N	\N
62	25	https://www.youtube.com/watch?v=LMagNcngvcU	Build and Deploy a Fully Responsive Modern UI/UX Website in React JS	This video is perfect for you if you want to learn how to transform a Figma design into a fully functioning website, improve your CSS skills, and create modern and responsive #ReactJS websites.\n\nBuild even more comprehensive, modern applications such as an AI-Powered Movie App and an NFT Marketplace application - Check it out now - https://www.jsmastery.pro 🔥\n\n💻JS Mastery Pro - https://jsmastery.pro?discount=youtube\n✅ A special YOUTUBE discount code is automatically applied!\n\nTime Stamps 👇\n00:00:00 Intro\n00:13:29 File & Folder Structure\n00:28:58 Navigation Bar\n01:05:23 Header\n01:33:14 Brands Section\n01:37:49 What is GP3 Section\n01:58:54 Future is Now Section\n02:04:16 Features\n02:16:33 CTA \n02:33:05 Blog Section\n02:55:06 Footer\n03:16:34 Deployment	https://i.ytimg.com/vi/LMagNcngvcU/sddefault.jpg	2023-02-13 16:50:55.959806	\N	\N
63	25	https://www.youtube.com/watch?v=neD6rV70Mlk	Can I recreate Stripe’s text effect?	Stripe has a cool text effect, so let’s dive into how they created it, and see if we can’t try to copy it!\n\n🔗 Links \n✅ Stripe’s home page: https://stripe.com\n✅The canvas gradient animation by Tiffany Rayside: https://codepen.io/tmrDevelops/pen/vOPZBv\n\n\n⌚ Timestamps\n00:00 - Introduction\n00:25 - Getting started\n01:37 - The background gradient animation\n01:41 - Fast motion starts\n01:54 - Fast motion ends\n03:15 - Fast motion starts\n03:37 - Flashing starts\n03:42 - Flashing ends\n03:46 - Fast motion ends\n03:47 - Positioning the background\n06:53 - Trying a simple solution\n08:06 - Seeing how Stripe did it\n10:55 - Setting up the effect - first attempt\n16:22 - Setting up the next - getting it right\n24:36 - Improving readability with a custom property\n26:20 - Do you like this style of video?\n\n#css\n	https://i.ytimg.com/vi/neD6rV70Mlk/sddefault.jpg	2023-02-13 16:51:35.519379	\N	\N
64	2	https://www.youtube.com/watch?v=3K9VUT7H5sw	#1 Hack for Building JavaScript Portfolio Projects	Work smarter not harder when it comes to building a JavaScript portfolio project. The goal is to build a project that shows your skill and depth in knowledge. It's often hard to balance building something impactful with the time it takes to build it. In this video, I'll share my #1 hack for building a powerful JavaScript portfolio project but in A LOT LESS time.\n\nCheck out Limey - https://limey.io\n\nSTAY IN TOUCH 👋\nCheck out the Podcast - https://compressed.fm/\nNewsletter 🗞 - https://www.jamesqquick.com/newsletter\nLive streams on Twitch 🖥️ - https://twitch.tv/jamesqquick\nFollow me on Twitter 🐦 - https://www.twitter.com/jamesqquick\n\nQUESTIONS...?\nJoin the Discord Server 💬 - https://discord.gg/vM2bagU\nWant to know what hardware and software I use? https://www.jamesqquick.com/uses	https://i.ytimg.com/vi/3K9VUT7H5sw/sddefault.jpg	2023-02-13 17:23:21.007944	\N	\N
65	2	https://www.youtube.com/watch?v=UUga4-z7b6s	Junior vs Senior React Folder Structure - How To Organize React Projects	FREE React Hooks Course: https://courses.webdevsimplified.com/react-hooks-simplified\n\nReact is an unopinionated framework, but with that freedom comes the difficulty of choosing how you want to structure your project. This is something many React developers of all skill levels struggle with so today I want to show you 3 different ways to lay out React projects of various sizes and complexities.\n\n\n📚 Materials/References:\n\nFREE React Hooks Course: https://courses.webdevsimplified.com/react-hooks-simplified\nGitHub Code: https://github.com/WebDevSimplified/react-folder-structure\nPure Functions Video: https://youtu.be/fYbhD_KMCOg\nPure Functions Article: https://blog.webdevsimplified.com/2020-09/pure-functions\nFacade Pattern Video: https://youtu.be/fHPa5xzbpaA\n\n\n🌎 Find Me Here:\n\nMy Blog: https://blog.webdevsimplified.com\nMy Courses: https://courses.webdevsimplified.com\nPatreon: https://www.patreon.com/WebDevSimplified\nTwitter: https://twitter.com/DevSimplified\nDiscord: https://discord.gg/7StTjnR\nGitHub: https://github.com/WebDevSimplified\nCodePen: https://codepen.io/WebDevSimplified\n\n\n⏱️ Timestamps:\n\n00:00 - Introduction\n00:55 - Beginner\n03:50 - Intermediate\n09:41 - Advanced\n\n\n#ReactJS #WDS #ReactFolderStructure	https://i.ytimg.com/vi/UUga4-z7b6s/sddefault.jpg	2023-02-13 17:23:43.924747	\N	\N
1	1	https://www.youtube.com/watch?v=t_ispmWmdjY	Ruby Programming Language - Full Course	Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics using the ruby language.\nWant more from Mike? He ISs starting a coding RPG/Bootcamp	https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=738%2C320&ssl=1	2023-02-13 11:50:25.217921	2023-02-13 17:47:03.168728	\N
66	25	https://www.npmjs.com/package/react-youtube	react-youtube - npm	React.js powered YouTube player component. Latest version: 10.1.0, last published: 3 months ago. Start using react-youtube in your project by running `npm i react-youtube`. There are 228 other projects in the npm registry using react-youtube.	\N	2023-02-13 17:52:19.661311	\N	\N
67	25	https://material-theme.com/docs/configuration/scrollbars/	 Scrollbars - Material Theme UI Documentation	Customize Editor Scrollbars	https://storage.screenshotapi.net/material_theme_com_docs_configuration_scrollbars__f3a8dbee5cf6.png	2023-02-13 18:07:52.803071	\N	\N
35	1	https://www.youtube.com/watch?v=Ke90Tje7VS0&list=PLzlkf6Y3hMLCBEy7SJPUVPKoCXZ-m78IQ&index=14	React JS - React Tutorial for Beginners	React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world! \n- Want to master React? Get my React mastery course: http://bit.ly/2KVl2A3\n- Subscribe for more videos like this: https://goo.gl/6PYaGF\n\nWant to learn more from me? Check out my blog and courses: \n\nCourses: https://codewithmosh.com\nBlog: https://programmingwithmosh.com \nFacebook: https://www.facebook.com/programmingwithmosh/\nTwitter: https://twitter.com/moshhamedani\n\nTABLE OF CONTENT\n\n00:00 Introduction\n01:14 What is React\n05:48 Setting Up the Development Environment \n09:27 Your First React App\n16:03 Hello World\n22:26 Components\n24:06 Setting Up the Project\n26:15 Your First React Component\n31:38 Specifying Children\n35:56 Embedding Expressions\n40:49 Setting Attributes\n46:36 Rendering Classes Dynamically\n50:57 Rendering Lists\n54:58 Conditional Rendering\n1:01:04 Handling Events\n1:03:56 Binding Event Handlers\n1:08:34 Updating the State\n1:10:51 What Happens When State Changes \n1:12:58 Passing Event Arguments\n1:17:31 Composing Components\n1:21:18 Passing Data to Components\n1:24:31 Passing Children\n1:27:44 Debugging React Apps\n1:31:55 Props vs State\n1:34:22 Raising and Handling Events\n1:39:16 Updating the State\n1:43:57 Single Source of Truth\n1:47:55 Removing the Local State\n1:54:44 Multiple Components in Sync \n2:00:39 Lifting the State Up\n2:06:18 Stateless Functional Components\n2:08:49 Destructuring Arguments\n2:10:52 Lifecycle Hooks\n2:12:32 Mounting Phase \n2:18:09 Updating Phase \n2:22:31 Unmounting Phase\n\n#react #webdevelopment #programming	https://i.ytimg.com/vi/Ke90Tje7VS0/sddefault.jpg	2023-02-13 12:30:18.979959	2023-02-13 18:21:47.692883	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: development
--

COPY public.users (id, email, password, created_at, updated_at, deleted_at) FROM stdin;
1	johnstewart@test.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
2	george@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
3	tjacobs@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
4	jane@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
5	lucyloo@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
6	gsanders@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
7	rroger@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
8	user1@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
9	user2@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
10	user3@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
11	user4@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
12	user5@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
13	user6@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
14	user7@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
15	user8@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
16	user9@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
17	user10@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
18	user11@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
19	user12@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
20	user1@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
21	user13@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
22	user14@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
23	user15@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
24	user16@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
25	user17@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
26	user18@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
27	user19@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
28	user20@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
29	user21@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
30	user22@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
31	user23@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
32	user24@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
33	user25@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
34	user26@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
35	user27@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
36	user28@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
37	user29@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
38	user30@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
39	user31@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
40	user31@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
41	user32@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
42	user33@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
43	user34@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
44	user35@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
45	user36@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
46	user37@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
47	user38@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
48	user39@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
49	user40@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
50	user41@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
51	user42@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
52	user43@example.com	$2b$12$64.etdeMf7RrrxKTu8UoQu1YkHEaHtcubCOBRLfwqTpXMh7ACB0uS	2023-02-13 11:50:25.20207	\N	\N
\.


--
-- Name: bookmarks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.bookmarks_id_seq', 1184, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.categories_id_seq', 91, true);


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.comments_id_seq', 7, true);


--
-- Name: favourites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.favourites_id_seq', 1184, true);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.likes_id_seq', 1188, true);


--
-- Name: playlists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.playlists_id_seq', 1184, true);


--
-- Name: profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.profiles_id_seq', 50, true);


--
-- Name: rankings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.rankings_id_seq', 74, true);


--
-- Name: ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.ratings_id_seq', 72, true);


--
-- Name: recommends_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.recommends_id_seq', 1184, true);


--
-- Name: reports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.reports_id_seq', 1184, true);


--
-- Name: resources_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.resources_id_seq', 67, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: development
--

SELECT pg_catalog.setval('public.users_id_seq', 52, true);


--
-- Name: bookmarks bookmarks_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.bookmarks
    ADD CONSTRAINT bookmarks_pkey PRIMARY KEY (id);


--
-- Name: bookmarks bookmarks_resource_id_profile_id_key; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.bookmarks
    ADD CONSTRAINT bookmarks_resource_id_profile_id_key UNIQUE (resource_id, profile_id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: comments comments_resource_id_profile_id_is_private_key; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_resource_id_profile_id_is_private_key UNIQUE (resource_id, profile_id, is_private);


--
-- Name: favourites favourites_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT favourites_pkey PRIMARY KEY (id);


--
-- Name: favourites favourites_resource_id_profile_id_key; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT favourites_resource_id_profile_id_key UNIQUE (resource_id, profile_id);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: likes likes_resource_id_profile_id_key; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_resource_id_profile_id_key UNIQUE (resource_id, profile_id);


--
-- Name: playlists playlists_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.playlists
    ADD CONSTRAINT playlists_pkey PRIMARY KEY (id);


--
-- Name: playlists playlists_resource_id_profile_id_key; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.playlists
    ADD CONSTRAINT playlists_resource_id_profile_id_key UNIQUE (resource_id, profile_id);


--
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);


--
-- Name: profiles profiles_user_id_key; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_user_id_key UNIQUE (user_id);


--
-- Name: rankings rankings_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.rankings
    ADD CONSTRAINT rankings_pkey PRIMARY KEY (id);


--
-- Name: rankings rankings_resource_id_profile_id_key; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.rankings
    ADD CONSTRAINT rankings_resource_id_profile_id_key UNIQUE (resource_id, profile_id);


--
-- Name: ratings ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);


--
-- Name: ratings ratings_resource_id_profile_id_key; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_resource_id_profile_id_key UNIQUE (resource_id, profile_id);


--
-- Name: recommends recommends_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.recommends
    ADD CONSTRAINT recommends_pkey PRIMARY KEY (id);


--
-- Name: recommends recommends_resource_id_profile_id_key; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.recommends
    ADD CONSTRAINT recommends_resource_id_profile_id_key UNIQUE (resource_id, profile_id);


--
-- Name: reports reports_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_pkey PRIMARY KEY (id);


--
-- Name: reports reports_resource_id_profile_id_key; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_resource_id_profile_id_key UNIQUE (resource_id, profile_id);


--
-- Name: resources resources_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: bookmarks bookmarks_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.bookmarks
    ADD CONSTRAINT bookmarks_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: bookmarks bookmarks_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.bookmarks
    ADD CONSTRAINT bookmarks_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: categories categories_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: categories categories_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: comments comments_comment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES public.comments(id) ON DELETE CASCADE;


--
-- Name: comments comments_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: comments comments_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: favourites favourites_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT favourites_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: favourites favourites_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT favourites_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: likes likes_comment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES public.comments(id) ON DELETE CASCADE;


--
-- Name: likes likes_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: likes likes_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: playlists playlists_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.playlists
    ADD CONSTRAINT playlists_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: playlists playlists_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.playlists
    ADD CONSTRAINT playlists_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: profiles profiles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: rankings rankings_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.rankings
    ADD CONSTRAINT rankings_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: rankings rankings_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.rankings
    ADD CONSTRAINT rankings_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: ratings ratings_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: ratings ratings_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: recommends recommends_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.recommends
    ADD CONSTRAINT recommends_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: recommends recommends_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.recommends
    ADD CONSTRAINT recommends_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: reports reports_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: reports reports_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: resources resources_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: development
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

