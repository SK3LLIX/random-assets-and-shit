
function playercontroller ()
{
    player_anim_text.setText('Animation: ' + player_anim);
    player_pos_text.setText('x: ' + player.x + 'y: ' + player.y);
    player.on('animationcomplete', player_animation_finished);
    
    if (cursors.left.isDown && !cursors.up.isDown && player.body.touching.down && !cursors.down.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('walk-left', true);
        
        player_direction = 'left';
        
        player_anim = 'walk';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if (cursors.right.isDown && !cursors.up.isDown && player.body.touching.down && !cursors.down.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('walk-right', true);
        
        player_direction = 'right';
        
        player_anim = 'walk';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if (cursors.left.isDown && cursors.up.isDown && player.body.touching.down && player_anim != 'jump' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(-160);
        
        player.setVelocityY(-330);

        player.anims.play('jump-left', true);
        
        player_direction = 'left';
        
        player_anim = 'jump';
        
        player_anim_end = false;
    }
    else if (cursors.right.isDown && cursors.up.isDown && player.body.touching.down && player_anim != 'jump' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(160);
        
        player.setVelocityY(-330);

        player.anims.play('jump-right', true);
        
        player_direction = 'right';
        
        player_anim = 'jump';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(player_direction === 'right' && player_anim != 'idle' && !cursors.right.isDown && !cursors.left.isDown && !cursors.down.isDown && player.body.touching.down && !cursors.down.isDown)
    {
        player.setVelocityX(0);

        player.anims.play('idle-right');

        player_anim = 'idle';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(player_direction === 'left' && player_anim != 'idle' && !cursors.right.isDown && !cursors.left.isDown && !cursors.down.isDown && player.body.touching.down && !cursors.down.isDown)
    {
        player.setVelocityX(0);

        player.anims.play('idle-left');

        player_anim = 'idle';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(player_direction != 'left' && player_direction != 'right')
    {
        player.anims.play('error');
        
    }
    else if(player_direction === 'left' && cursors.up.isDown && player.body.touching.down && player_anim != 'jump' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityY(-330);
        
        player.anims.play('jump-left');
        
        player_anim = 'jump';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(player_direction === 'right' && cursors.up.isDown && player.body.touching.down && player_anim != 'jump' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityY(-330);

        player.anims.play('jump-right');

        player_anim = 'jump';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(player_direction === 'left'  && player_anim != 'air-left' && player_anim != 'duck-left' && !player.body.touching.down && player_anim_end === true && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.anims.play('air-left');
        
        player_anim = 'air-left';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(player_direction === 'right'  && player_anim != 'air-right' && player_anim != 'duck-right' && !player.body.touching.down && player_anim_end === true && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.anims.play('air-right');

        player_anim = 'air-right';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(cursors.left.isDown  && player_anim != 'duck-left' && !player.body.touching.down && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(-160);
        
        player.anims.play('air-left');
        
        player_anim = 'air-left';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(cursors.right.isDown  && player_anim != 'duck-left' && !player.body.touching.down && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(160);
        
        player.anims.play('air-right');

        player_anim = 'air-right';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(cursors.left.isDown  && player_anim === 'jump' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(-160);
        
        player.anims.play('jump-left');
        
        player_anim = 'jump-left';
        
        player_direction = 'left';
        
        player_anim_end = false;
    }
    else if(cursors.right.isDown  && player_anim === 'jump' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(160);
        
        player.anims.play('jump-right');

        player_anim = 'jump-right';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(cursors.left.isDown  && player_anim === 'jump-right' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(-160);
        
        player.anims.play('jump-left');
        
        player_anim = 'jump-left';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(cursors.right.isDown  && player_anim === 'jump-left' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(160);
        
        player.anims.play('jump-right');

        player_anim = 'jump-right';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(cursors.left.isDown  && player_anim === 'jump' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(-160);
        
        player.anims.play('jump-left');
        
        player_anim = 'jump-left';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(cursors.right.isDown  && player_anim === 'jump' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(160);
        
        player.anims.play('jump-right');

        player_anim = 'jump-right';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if(!cursors.left.isDown  && !cursors.right.isDown  && !cursors.down.isDown && player_anim === 'jump_right' || player_anim === 'jump-left' && player_anim != 'stomp')
    {
        player.setVelocityX(0);
        
        player_anim_end = false;
    }
    else if (!cursors.left.isDown && !cursors.right.isDown  && player_anim === 'air-right' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(0);
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if (!cursors.left.isDown && !cursors.right.isDown  && player_anim === 'air-left' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(0);
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if (cursors.left.isDown && player_anim === 'air-right' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(-160);
        
        player.anims.play('air-left');
        
        player_anim = 'air-left';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if (cursors.right.isDown && player_anim === 'air-left' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(160);
        
        player.anims.play('air-right');

        player_anim = 'air-right';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if (cursors.left.isDown && player_anim === 'air-left' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(-160);
        
        player.anims.play('air-left');
        
        player_anim = 'air-left';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if (cursors.right.isDown && player_anim === 'air-right' && !cursors.down.isDown && player_anim != 'stomp')
    {
        player.setVelocityX(160);
        
        player.anims.play('air-right');

        player_anim = 'air-right';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'right' && player.body.touching.down && !cursors.left.isDown && !cursors.right.isDown && cursors.down.isDown && player_anim != 'duck' && player_anim != 'duck-loop')
    {   
        player.setVelocityX(0);
        
        player.anims.play('duck-right');

        player_anim = 'duck';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 28)
        
        player.body.offset.y = 39;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'left' && player.body.touching.down && !cursors.left.isDown && !cursors.right.isDown && cursors.down.isDown && player_anim != 'duck' && player_anim != 'duck-loop')
    {   
        player.setVelocityX(0);
        
        player.anims.play('duck-left');

        player_anim = 'duck';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 28)
        
        player.body.offset.y = 39;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'right' && player.body.touching.down && cursors.down.isDown && player_anim === 'duck' && player_anim_end === true)
    {   
        player.setVelocityX(0);
        
        player.anims.play('duck-loop-right');

        player_anim = 'duck-loop';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 28)
        
        player.body.offset.y = 39;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'left' && player.body.touching.down && cursors.down.isDown && player_anim === 'duck' && player_anim_end === true)
    {   
        player.setVelocityX(0);
        
        player.anims.play('duck-loop-left');

        player_anim = 'duck-loop';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 28)
        
        player.body.offset.y = 39;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'right' && player.body.touching.down && cursors.right.isDown && cursors.down.isDown && player_anim === 'duck-loop' && player_anim != 'crawl')
    {   
        player.setVelocityX(160);
        
        player.anims.play('crawl-right');

        player_anim = 'crawl';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 28)
        
        player.body.offset.y = 39;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'right' && player.body.touching.down && cursors.left.isDown && cursors.down.isDown && player_anim === 'duck-loop' && player_anim != 'crawl')
    {   
        player.setVelocityX(-160);
        
        player.anims.play('crawl-left');

        player_anim = 'crawl';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 28)
        
        player.body.offset.y = 39;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'left' && player.body.touching.down && cursors.right.isDown && cursors.down.isDown && player_anim === 'duck-loop' && player_anim != 'crawl')
    {   
        player.setVelocityX(160);
        
        player.anims.play('crawl-right');

        player_anim = 'crawl';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 28)
        
        player.body.offset.y = 39;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'left' && player.body.touching.down && cursors.left.isDown && cursors.down.isDown && player_anim === 'duck-loop' && player_anim != 'crawl')
    {   
        player.setVelocityX(-160);
        
        player.anims.play('crawl-left');

        player_anim = 'crawl';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 28)
        
        player.body.offset.y = 39;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'right' && player.body.touching.down && cursors.right.isDown && cursors.down.isDown && player_anim === 'walk' && player_anim != 'crawl')
    {   
        player.setVelocityX(160);
        
        player.anims.play('crawl-right');

        player_anim = 'crawl';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 28)
        
        player.body.offset.y = 39;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'right' && player.body.touching.down && cursors.right.isDown && cursors.down.isDown && player_anim === 'walk' && player_anim != 'crawl')
    {   
        player.setVelocityX(160);
        
        player.anims.play('crawl-right');

        player_anim = 'crawl';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 28)
        
        player.body.offset.y = 39;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'left' && player.body.touching.down && cursors.left.isDown && cursors.down.isDown && player_anim === 'walk' && player_anim != 'crawl')
    {   
        player.setVelocityX(-160);
        
        player.anims.play('crawl-left');

        player_anim = 'crawl';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 28)
        
        player.body.offset.y = 39;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'left' && player.body.touching.down && cursors.left.isDown && cursors.down.isDown && player_anim === 'walk' && player_anim != 'crawl')
    {   
        player.setVelocityX(-160);
        
        player.anims.play('crawl-left');

        player_anim = 'crawl';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 28)
        
        player.body.offset.y = 39;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'right' && !player.body.touching.down && cursors.down.isDown && player_anim === 'air-right' && player_anim != 'stomp')
    {   
        player.setVelocityX(0);
        
        player.setVelocityY(330);
        
        player.anims.play('stomp-right');

        player_anim = 'stomp';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'left' && !player.body.touching.down && cursors.down.isDown && player_anim === 'air-left' && player_anim != 'stomp')
    {   
        player.setVelocityX(0);
        
        player.setVelocityY(330);
        
        player.anims.play('stomp-left');

        player_anim = 'stomp';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'right' && !player.body.touching.down && cursors.down.isDown && player_anim === 'stomp' && player_anim_end === true)
    {   
        player.setVelocityX(0);
        
        player.setVelocityY(330);
        
        player.anims.play('stomp-loop-right');

        player_anim = 'stomp-loop';
        
        player_direction = 'right';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
    else if (player_direction === 'left' && !player.body.touching.down && cursors.down.isDown && player_anim === 'stomp' && player_anim_end === true)
    {   
        player.setVelocityX(0);
        
        player.setVelocityY(330);
        
        player.anims.play('stomp-loop-left');

        player_anim = 'stomp-loop';
        
        player_direction = 'left';
        
        player_anim_end = false;
        
        player.body.setSize(36, 56)
        
        player.body.offset.y = 11;
        
        player.body.offset.x = 25;
    }
}
