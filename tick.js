function tick()
{

    this.Obstacle.types[0]["minGap"] = 150;
    this.Obstacle.types[1]["minGap"] = 150;

    game = this.Runner.instance_;
    myobstacles = game.horizon.obstacles;

    setTimeout(function(){
        if (game.crashed || game.paused) {
            return requestAnimationFrame(tick);
        }

        game.setSpeed(10);

        if(game.tRex.ducking)
        {
            game.tRex.setDuck(true);
        }


        if(myobstacles.length>0)
        {
            action = "JUMP";
            obstacle_type = myobstacles[0]["typeConfig"]["type"];

            if(obstacle_type=="CACTUS_SMALL" || obstacle_type=="CACTUS_LARGE")
            {
                action = "JUMP";
            }
            else if(obstacle_type=="PTERODACTYL")
            {
                if(myobstacles[0]["yPos"]==75 || myobstacles[0]["yPos"]==50)
                    action = "DUCK";
            }

            if(myobstacles[0].xPos<=100)
            {

                if(action=="JUMP")
                {

                    curr_speed = game.currentSpeed;
                    game.tRex.startJump(curr_speed);
                }
                else if(action=="DUCK")
                {

                    game.tRex.setDuck(true);
                }
            }
        }

        requestAnimationFrame(tick);
    },50)
}

tick();