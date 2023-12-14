const router = require('express').Router();

const ConstructionControler = require('../../controllers/construction.controller');
const { checkAdmin } = require('../../helpers/middlewares');


router.get('/', ConstructionControler.getAllConstructions );
router.get('/:constructionId', ConstructionControler.getConstructionWithWorkers );
router.get('/reports/:constructionId', ConstructionControler.getConstructionWithReports );
router.get('/filters/:city', ConstructionControler.getConstructionsByCity );
router.get('/name/:order', ConstructionControler.getConstructionsByName );
router.get('/date/:aDate', ConstructionControler.getConstructionsByADate );
router.get('/deadline/:deadline', ConstructionControler.getConstructionsByDeadline );
router.get('/type/:type', ConstructionControler.getConstructionsByType );

router.post('/new',ConstructionControler.createNewConstruction );
router.put('/:constructionId', ConstructionControler.updateContruction );
router.delete('/:constructionId' ,ConstructionControler.deleteConstructionById );






module.exports = router;


